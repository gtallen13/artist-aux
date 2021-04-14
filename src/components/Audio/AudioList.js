import React, {useContext, useEffect, useState} from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity,View} from 'react-native'
import {firebase} from '../../firebase'
import {Context as RecordingContext} from '../../providers/RecordingContext'
import {Context as ProjectContext} from '../../providers/ProjectContext' 
import {Audio as AudioCard} from './Audio'
import {Audio} from 'expo-av'
//https://www.npmjs.com/package/react-native-dialog
import Dialog from "react-native-dialog";

const AudioList = ({recordings})=>{
    const {state, deleteRecording,getRecordings} = useContext(RecordingContext)
    const {state:projectState} = useContext(ProjectContext)
    const [visiblePrompt, setVisiblePrompt] = useState(false)
    const [selectedRecording, setSelectedRecording] = useState()
    const [sound, setSound] = useState(new Audio.Sound());
    const [audioStatus, setAudioStatus] = useState(false);
    const [soundToPlay, setSoundToPlay] = useState();

    useEffect(()=>{
        getRecordings(projectState.currentProject.id);
    },[])
    const handlerLongPress = (recording)=>{
        setSelectedRecording(recording)
        setVisiblePrompt(true)
    }
    const handleTogglePlay=(recording)=>{
        setSoundToPlay(recording);
        setAudioStatus(!audioStatus);
    }

    //play/stop sound
    //https://snack.expo.io/@mrarich/blessed-soylent
    useEffect(()=>{
        (async ()=>{
            console.log(`status: ${audioStatus}`);
            if (audioStatus)
            {
                playSound();
            }
            else
            {
                await sound.stopAsync();
                await sound.unloadAsync();
            }

        })()
    },[audioStatus])
    const handlerDeleteRecording = () => {
        console.log(selectedRecording)
        deleteRecording(projectState.currentProject.id, selectedRecording)
        setVisiblePrompt(false)
    }
    const playSound = async () =>{
        const audioURL = soundToPlay.split('/')
        const uri = await firebase
        .storage()
        .ref(audioURL[0])
        .child(audioURL[1])
        .getDownloadURL()
        console.log(`uri: ${uri}`)            
        try
        {
            await sound.loadAsync({uri})
            await sound.playAsync()
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
            data={recordings}
            keyExtractor={item=>item}
            renderItem={({item})=>(
                <>
                    <TouchableOpacity onLongPress={()=>handlerLongPress(item)} onPress={()=> handleTogglePlay(item)}>
                        <AudioCard
                        title={item}/>
                    </TouchableOpacity>   
                </>
            )}
            />
            <Dialog.Container visible={visiblePrompt} onBackdropPress={()=>setVisiblePrompt(false)}>
                <Dialog.Title>Delete Recording</Dialog.Title>
                <Dialog.Description>Do you really wanna delete this masterpiece?</Dialog.Description>
                <Dialog.Button 
                label="Cancel" 
                onPress={()=>setVisiblePrompt(false)}/>
                <Dialog.Button 
                label="Delete" 
                color="#97221F"
                bold={true}
                onPress={()=>handlerDeleteRecording()}/>
            </Dialog.Container>
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