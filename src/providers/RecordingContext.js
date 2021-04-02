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