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
        case "getRecordings":
            return {
                ...state,
                recordings: action.payload.recordings,
                loadingRecordings: action.payload.loading
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
        dispatch({type:"newRecording"});
        dispatch({type:"feeback", payload:"Recording Added"});
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

//Para obtener el arreglo de recordings
//https://stackoverflow.com/questions/62036521/how-to-get-an-array-from-firestore-with-javascript
const getRecordings = (dispatch) => async (projectID)=>{
    projectsRef.doc(projectID).get("recordings")
    .then((queryResult)=>{
        const data = queryResult.data().recordings;
        dispatch({type:"getRecordings", payload:{recordings:data, loading:false}});
    })
    .catch((error)=>{
        dispatch({type:"feedback", payload:error.message});
        console.log(error);
    })
}
const clearFeedback = (dispatch) => ()=>{
    dispatch({type:"feedback", payload:""});
}
export const {Provider, Context} = createDataContext(
    recordingReducer,
    {
        setCurrentRecording,
        deleteRecording,
        newRecording,
        getRecordings,
    },
    {
        feedback:"",
        currentRecording:{title:""},
        recordingDeleted:false,
        recordingAdded:false,
        recordings:[],
        loadingRecordings:true,
    }
)