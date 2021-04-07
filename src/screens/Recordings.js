import React, { useEffect, useState } from 'react'
import {View,  ScrollView,StyleSheet, Text} from 'react-native'
import {Icon} from 'react-native-elements'
import { ButtonStopNote } from '../components/Button'
import { TextNote } from '../components/ButtonText'
import {firebase} from '../firebase'
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as IntentLauncher from 'expo-intent-launcher'
//https://docs.expo.io/versions/latest/sdk/audio/
import {Audio} from 'expo-av'
const Recordings = ({navigation}) =>{
    const [isRecording, setIsRecording] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [sound, setSound] = useState();
    const [recording, setRecording] = useState();
    const [recordings, setRecordings] = useState('')
    const playSound = async()=>{
        console.log('Loading Sound');
        const {sound} = await Audio.Sound.createAsync(require('../../assets/jeff.mp3'))
        setSound(sound)
        setIsPlaying(true)
        console.log('Playing Sound')
        await sound.playAsync();
    }
    const stopSound = async ()=>{
        console.log('Stoping sound')
        setIsPlaying(false)
        await sound.stopAsync()
    }
    useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

    const startRecording = async ()=>{
        try{
            console.log('requesting permissions')
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS:true,
                playsInSilentModeIOS:true,
            });
            await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
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
        
        //Content from uri
        FileSystem.getContentUriAsync(uri)
        .then((cURI)=>{
            console.log(cURI)
            setRecordings(cURI)
            IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
                data: cURI,
                flags: 1,
            });
        })
        .catch((error)=>{
            console.log(error)
        })

        uploadFile()
    }

    const uploadFile = ()=>{
        //Upload file
        const storage = firebase.storage()
        const storageRef = storage.ref()
        const audioRef = storageRef.child('jeffUpload1.m4a');
        console.log(`Audioref: ${audioRef}`)
        const metadata = {
            contentType:'audio/m4a'
        }
        audioRef.put(recordings,metadata).then((snapshot)=>{
            console.log('Uploaded a blob or a file')
            downloadFile()
        })
        
    }
    const downloadFile = ()=>{
        const storage = firebase.storage()
        const pathReference = storage.ref('jeffUpload.m4a')
        const storageRef = storage.ref()
        storageRef.child('jeffUpload.m4a').getDownloadURL()
        .then((url)=>{
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event)=>{
                const blob = xhr.response
            }
            xhr.open('GET',url)
            xhr.send()
            console.log(url)
        })
        .catch((error)=>{
            console.log(error)
        })
        

    }
    return(
        <View style={styles.container}>
              <View style={styles.headerContainer}>    
                    <Icon style={styles.headerIcons} 
                            name="chevron-left" 
                            type="font-awesome" 
                            onPress={()=>navigation.navigate('projects')}
                    />
                    <Text style={styles.headerTitle}>Recordings</Text>
              </View>
              
              <View style={styles.recording}>
                    <ScrollView>
                    </ScrollView>
              </View>
              
              <View style={styles.buttomRecorging}>
                    <View style={styles.barSong}>
                        
                    </View>
                    <View style={styles.buttomBar}>
                        <ButtonStopNote
                            icon='step-backward'
                            color='white'
                            size={30}
                            callback={()=>downloadFile()}
                        />

                        <ButtonStopNote
                            icon='retweet'
                            color='white'
                            size={30}
                        />

                        <ButtonStopNote
                            icon={isPlaying ? 'stop-circle':'play-circle'}
                            color='white'
                            size={40}     
                            callback= {()=>{
                                isPlaying ? stopSound():playSound()
                            }}           
                        />

                        <ButtonStopNote
                           icon={isRecording ?  'stop' :'circle'}
                           color='red'
                           size={30}
                           callback={()=>
                            isRecording ? stopRecording() : startRecording()
                        }
                        />

                        <ButtonStopNote 
                            icon='step-forward'
                            color='white'
                            size={30}
                        />
               

                    </View>
                    <TextNote text = 'Note' fontSize={16} color = 'white' callback={()=> navigation.navigate('note')}/>
              </View>
               
        </View>  
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    headerIcons:{
        flex:1,
        paddingLeft:5,
    },
    headerTitle:{
        flex:1,
        textAlign:'center',
        fontSize:25,
        fontWeight:'600',
        paddingRight:30,
    },
    recording: {
        flex: 9,
        backgroundColor: '#E9E9E9',
        textAlignVertical: 'top',
        color: 'white',
       
    },
  
    buttomRecorging:{
        flex: 4,
        backgroundColor: 'black',
      
    },
    barSong:{
        flex:3,
    },

    buttomBar:{

        flexDirection:'row',
        justifyContent: 'center',
        borderColor:'#5bb1b0',     
    },
  
    
   
   
})
export default Recordings