import React, {useContext, useState} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity,View} from 'react-native'
import {Context as RecordingContext} from '../../providers/RecordingContext';
import Audio from './Audio'
const AudioList = ({recordings})=>{
    const {state, setCurrentRecording} = useContext(RecordingContext)
    const [recordingList, setRecordingList] = useState(recordings.recordings)
    //mostrar la lista de recordings
    const handleSelectRecording = (recording)=>{
        setCurrentRecording(recording)
    }

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
    const emptyFlatList = (
        <View style={styles.emptyRecordings}>
            <Text>You have no recordings yet</Text>
        </View>
    )
    
    return (
        <View style={styles.container}>
            <FlatList
            emptyFlatList={emptyFlatList}
            data={recordingList}
            keyExtractor={item=>item}
            renderItem={({item})=>(
                <>
                    <TouchableOpacity onPress={()=>handleSelectRecording(item)}>
                        <Audio
                        title={item}/>
                    </TouchableOpacity>   
                </>
            )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    emptyRecordings:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
})
export default AudioList