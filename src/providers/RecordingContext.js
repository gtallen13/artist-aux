import createDataContext from './createDataContext'

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
        default:
            return state
    }
}

const setCurrentRecording = (dispatch)=>(recording)=>{
    dispatch({type:"setCurrentRecording", payload:recording})
}

export const {Provider, Context} = createDataContext(
    recordingReducer,
    {
        setCurrentRecording
    },
    {
        currentRecording:{title:""}
    }
)