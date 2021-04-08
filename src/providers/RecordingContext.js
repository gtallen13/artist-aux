import createDataContext from "./createDataContext";
import {firebase} from '../firebase';

const recordingReducer = (state, action)=>{
    switch (action.type)
    {
        case "feedback":
            return {
                ...state,
                feedback: action.payload
            };
        case "createRecording":
            return {
                ...state,
                recordings: [...recordings, action.payload]
            };
        
        case "getRecordings":
            return {
                ...state,
                recordings: action.payload
            }
        default:
            return state
    }
}

//https://dev.to/lankinen/expo-audio-upload-recording-to-firebase-storage-and-download-it-later-25o6
const createRecording = (dispatch) = async (uri,fileName)=>{
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
const getRecordings = (dispatch) = async () =>{
    const uri = await firebase
        .storage()
        .ref(`Audio/April 8th 2021, 10:51:43 am.m4a`)
        .getDownloadURL()
        console.log(`uri: ${uri}`)
        
        const soundObject = new Audio.Sound()
        setSound(soundObject)
        console.log("not playing");
        try
        {
            await soundObject.loadAsync({uri})
            await soundObject.playAsync()
            setIsPlaying(true)
        }
        catch (error) 
        {
            console.log(error);
        }
}

export const {Provider,Context} = createDataContext(
    recordingReducer,
    {
        createRecording,
        getRecordings,
    },
    {
        feedback:"",
        recordings:{}
    }
)