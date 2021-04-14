import React, { useContext, useEffect, useState } from 'react'
import {View,StyleSheet, Text} from 'react-native'
import {Icon} from 'react-native-elements'
import { ButtonStopNote } from '../components/Button'
import {firebase} from '../firebase'
import {Context as ProjectContext} from '../providers/ProjectContext'
import {Context as RecordingContext} from '../providers/RecordingContext'
import moment from 'moment'
import {Audio} from 'expo-av'
import AudioList from '../components/Audio/AudioList'
//https://docs.expo.io/versions/latest/sdk/audio/
import { useTheme } from '@react-navigation/native';

const Recordings = ({navigation}) =>{
    const {state:projectState} = useContext(ProjectContext)
    const {state:recordingState, newRecording, getRecordings} = useContext(RecordingContext)
    const [isRecording, setIsRecording] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [recording, setRecording] = useState();
    const { colors } = useTheme();
    
    useEffect(()=>{
        getRecordings(projectState.currentProject.id);
    },[recordingState.recordings])
    const playSound = async()=>{
        const uri = await firebase
            .storage()
            .ref(recordingState.currentRecording)
            .getDownloadURL()
            console.log(`uri: ${uri}`)
            
            const soundObject = new Audio.Sound()
            
            try
            {
                await soundObject.loadAsync({uri})
                await soundObject.playAsync()
                soundObject.getStatusAsync()
                .then((res)=>{
                    console.log(res.durationMillis)
                })
                .catch((error)=>{
                    console.log(error);
                })
                setIsPlaying(true)
            }
            catch (error) 
            {
                console.log(error);
            }
    }

    
    const startRecording = async ()=>{
        try{
            console.log('requesting permissions')
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS:true,
                playsInSilentModeIOS:true,
            });
            console.log('Starting recording..')
            const recording = new Audio.Recording();
            await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
            await recording.startAsync();
            setRecording(recording);
            setIsRecording(true)
            console.log('recording started')
        }
        catch(err)
        {
            console.log('Failed to start recording', err);    
        }
    }
    const stopRecording = async ()=>{
        console.log('Stopppin recording');
        setRecording(undefined)
        setIsRecording(false)
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI(); 
        console.log('Recording stopped and stored at', uri);
        upload(uri)
    }
    const upload = async (uri)=>{
        console.log(projectState.currentProject.id)
        try
        {
            const blob = await new Promise((resolve,reject)=>{
                const xhr = new XMLHttpRequest();
                xhr.onload = ()=>{
                    try
                    {
                        resolve(xhr.response)
                    }
                    catch(error)
                    {
                        console.log(`error: ${error}`)
                    }
                };
                xhr.onerror = (e)=>{
                    console.log(e);
                    reject(new TypeError("Network request failed"))
                };
                xhr.responseType = "blob"
                xhr.open("GET", uri,true)
                xhr.send(null)
            })
            if (blob != null)
            {
                const uriParts = uri.split(".")
                const fileName = moment().format('MMMM Do YYYY, h:mm:ss a');
                const fileType = uriParts[uriParts.length - 1];
                firebase
                .storage()
                .ref()
                .child(`Audio/${fileName}.${fileType}`)
                .put(blob,{
                    contentType: `audio/${fileType}`
                })
                .then(()=>{
                    console.log('sent')
                
                    const storageURL = `Audio/${fileName}.${fileType}`
                     //Agregando la ruta del audio al documento del proyecto
                     newRecording(projectState.currentProject.id, storageURL)  
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
            else
            {
                console.log('error with blob');
            }
        }
        catch(error)
        {
            console.log(error)
        }
    }
    
    return(
        <View style={[styles.container, {backgroundColor: colors.background}]}>
              <View style={styles.headerContainer}>    
                    <Icon 
                        style={styles.headerIcons}
                        color = {colors.text} 
                        name="chevron-left" 
                        type="font-awesome"
                        size={30}
                        onPress={()=>navigation.goBack()}
                    />
                    <Text style={[styles.headerTitle, {color: colors.text}]}>Recordings</Text>
                    
              </View>              
              <View style={styles.recording}>
                <AudioList recordings={recordingState.recordings}/>
              </View>  
                          
              <View style={styles.buttomRecorging}>                   
                    <View style={styles.buttomBar}>
                        <ButtonStopNote
                           icon={isRecording ?  'stop' :'circle'}
                           color='red'
                           size={100}
                           callback={()=>
                            isRecording ? stopRecording() : startRecording()
                        }
                        />
                    
                    </View>
              </View>
               
        </View>  
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"red"
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        paddingBottom:0,
    
    },
    headerIcons:{
        flex:1,
        marginLeft:20,
    },
    headerTitle:{
        flex:1,
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        paddingRight:30,
    },
    recording: {
        flex: 7,
        backgroundColor: '#E9E9E9',       
    },
  
    buttomRecorging:{
        backgroundColor: '#E9E9E9',
        justifyContent:'center',
        alignItems:'center',
        padding:30,
      
    },
    buttomBar:{

        flexDirection:'row',
        justifyContent: 'center',
        borderColor:'#5bb1b0',     
    },
  
    
   
   
})
export default Recordings