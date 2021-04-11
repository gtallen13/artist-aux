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
        default:
            return state
    }
}
const projectsRef = firebase.firestore().collection("Projects")
const setCurrentRecording = (dispatch)=>(recording)=>{
    dispatch({type:"setCurrentRecording", payload:recording})
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
        deleteRecording
    },
    {
        currentRecording:{title:""},
        recordingDeleted:false,
    }
)