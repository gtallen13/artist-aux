import React, { useEffect, useState } from 'react'
import {View, TextInput, ScrollView,StyleSheet, Text, useColorScheme} from 'react-native'
import {Icon} from 'react-native-elements'
import { ButtonStopNote } from '../components/Button'
import { TextNote } from '../components/ButtonText'

//https://dzone.com/articles/react-native-record-audio-tutorial
import AudioRecorderPlayer, {
 AVEncoderAudioQualityIOSType,
 AVEncodingOption,
 AudioEncoderAndroidType,
 AudioSet,
 AudioSourceAndroidType,
} from 'react-native-audio-recorder-player'
import { Platform } from 'react-native'
const Recordings = ({navigation}) =>{
    const [isRecording, setIsRecording] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [recordingdSecs, setRecordingSecs] = useState(0);
    const [recordingTime, setRecordingTime] = useState('00:00:00');
    const [currentPositionSec, setCurrentPositionSec] = useState(0);
    const [currentDurationSec, setCurrentDurationSec] = useState(0);
    const [playtime, setPlaytime] = useState('00:00:00')
    const [duration, setDuration] = useState('00:00:00')
    

    const audioRecorderPlayer = new AudioRecorderPlayer();
    audioRecorderPlayer.setSubscriptionDuration()

    const onStartRecord = async ()=>{
        setIsRecording(true)
        console.log ('recording')
        const path = Platform.select({
            ios:'hello.m4a',
            android: 'Music/hello.m4a', 
        })
        const audioSet = {
            AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
            AudioSourceAndroid: AudioSourceAndroidType.MIC,
            AVEncoderAudioQualityIOS: AVEncoderAudioQualityIOSType.high,
            AVNumberofChannelsKeyIOS:2,
            AVFormatIDKeyIOS: AVEncodingOption.aac,
        }
        console.log('audioSet',audioSet);
        const uri = await audioRecorderPlayer.startRecorder(path, audioSet);
        
        audioRecorderPlayer.addPlayBackListener((e) => {
            setRecordingSecs(e.current_position)
            setRecordingTime(audioRecorderPlayer.mmssss(Math.floor(e.current_position)))
        })
        console.log(uri)
        console.log(`uri: ${uri}`);
    }
    const onStopRecord = async ()=>{
        setIsRecording(false)
        console.log('not recording');
        const result = await audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removePlayBackListener();
        setRecordingSecs(0)
        console.log(result);
    }

    const onStartPlay = async (e)=>{
        setIsPlaying(true)
        console.log('onStartPlay')
        const path = 'hello.m4a'
        const msg = await audioRecorderPlayer.startPlayer(path);
        audioRecorderPlayer.setVolume(1.0)
        console.log(msg)
        audioRecorderPlayer.addPlayBackListener((e)=>{
            if (e.current_position === e.duration)
            {
                console.log('finished');
                audioRecorderPlayer.stopPlayer();
            }
        })
        setCurrentPositionSec(e.current_position);
        setCurrentDurationSec(e.duration);
        setPlaytime(audioRecorderPlayer.mmssss(Math.floor(e.current_position)));
        setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)))
    }
    const onPausePlay = async(e)=>{
        setIsPlaying(false)
        await audioRecorderPlayer.pausePlayer()
        .then(()=>{
            console.log("Pause");
        })
        .catch(()=>{
            console.log("couldn't pause");
        })
    }
    const onStopPlay = async ()=>{
        console.log('onStopPlay')
        audioRecorderPlayer.stopPlayer()
        audioRecorderPlayer.removePlayBackListener()
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
                        {/* recordings space */}
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
                            icon={isPlaying ? 'pause-circle':'play-circle'}
                            color='white'
                            size={40}     
                            callback= {()=>{
                                isPlaying ? onPausePlay():onStartPlay()
                            }}           
                        />

                        <ButtonStopNote
                           icon={isRecording ?  'stop' :'circle'}
                           color='red'
                           size={30}
                           callback={()=>
                            isRecording ? onStopRecord() : onStartRecord()
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