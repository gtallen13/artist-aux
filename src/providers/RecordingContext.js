import createDataContext from './createDataContext'
import {firebase} from '../firebase'

const recordingReducer = (action, state)=>{
    switch(action.type)
    {
        case "feedback":
            return {
                ...state,
                feedback: action.payload
            }
        case "setCurrentRecording":
            return{
                ...state,
                currentRecording: action.payload
            }
        case "deleteRecording":
            return{
                ...state,
                recordingDeleted:true,
            }
        case "newRecording":
            return {
                ...state,
                recordingAdded: true
            }
        default:
            return state
    }
}
const projectsRef = firebase.firestore().collection("Projects")
const setCurrentRecording = (dispatch)=>(recording)=>{
    dispatch({type:"setCurrentRecording", payload:recording})
}
const newRecording = (dispatch) => (id,recording)=>{
    projectsRef
    .doc(id)
    .update({
        recordings: firebase.firestore.FieldValue.arrayUnion(recording)
    })
    .then(()=>{
        dispatch({type:"newRecording"})
    })
    .catch((error)=>{
        dispatch({type:"feedback" ,payload:{feedback:error.message}})
    })
}
const deleteRecording=(dispatch)=>(id,recording)=>{
    projectsRef
    .doc(id)
    .update({
        recordings: firebase.firestore.FieldValue.arrayRemove(recording)
    })
    .then(()=>{
        dispatch({type:"feedback", payload:"Recording Deleted"})
        dispatch({type:"deleteRecording"})
    })
    .catch((error)=>{
        dispatch({type:"feedback", payload:error.message})
    })
}
export const {Provider, Context} = createDataContext(
    recordingReducer,
    {
        setCurrentRecording,
        deleteRecording,
        newRecording
    },
    {
        currentRecording:{title:""},
        recordingDeleted:false,
        recordingAdded:false,
    }
)