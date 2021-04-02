import React, { useEffect, useState } from 'react'
import {View, TextInput, ScrollView,StyleSheet, Text} from 'react-native'
import {Icon} from 'react-native-elements'
import { ButtonStopNote } from '../components/Button'
import { ButtonText, TextNote } from '../components/ButtonText'
import {Audio} from 'expo-av'
import { Sound } from 'expo-av/build/Audio'
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens'
const Recordings = ({navigation}) =>{
    const [sound, setSound] = useState();
    const [recording, setRecording] = useState();
    

    useEffect(()=>{
        return sound ? ()=>{
            console.log("Unloading Sound");
            //desmontando el sonido para evitar fugas de memoria
            sound.unloadAsync();
        }:undefined
    },[sound])
    const playSound = async ()=>{
        console.log("loading sound")
        //cargando el audio
        const {sound} = await Sound.createAsync(
            require('../recordings/test.ogg')
        )
        setSound(sound)
        // reproduciendo el audio
        console.log("playing sound")
        await sound.playAsync()
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
                        />

                        <ButtonStopNote
                            icon='retweet'
                            color='white'
                            size={30}
                        />

                        <ButtonStopNote
                            icon='play-circle'
                            color='white'
                            size={40}
                            callback={playSound}
                        />

                        <ButtonStopNote
                           icon='circle'
                           color='red'
                           size={30}
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