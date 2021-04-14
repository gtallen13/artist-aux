import createDataContext from './createDataContext';
import {firebase} from '../firebase'

const projectReducer = (state,action)=>{
    switch (action.type)
    {
        case "feedback":
            return{
                ...state,
                feedback: action.payload
            }
        case "createProject":
            return{
                ...state,
                projects: [...projects,action.payload.project]
            }
        case "getProjects":
            return {
                ...state,
                projects: action.payload
            } 
        case "setCurrentProject":
            return {
                ...state,
                currentProject:action.payload
            }
        case "deleteProject":
            return{
                ...state,
                projectDeleted:true,
            }
        case "updateProject":
            return{
                ...state,
                projects: state.projects.map((project)=>{
                    if (project.id === action.payload.project.id)
                    {
                        return{
                            ...project,
                            title: action.payload.project.title,
                            timestamp: action.payload.project.timestamp,
                            note:action.payload.project.timestamp,
        
                        }
                    }
                    return project
                })
            }
        default:
            return state
    }
}

const projectsRef = firebase.firestore().collection("Projects")

const createProject = (dispatch)=>(title,author,timestamp,note,recordings)=>{
    const data ={
        title,
        userID: author,
        timestamp,
        note,
        recordings,
    }
    projectsRef
    .add(data)
    .then(()=>{
        dispatch({type:"feedback", payload:"Project Added!"})
    })
    .catch((error)=>{
        dispatch({type:"feedback", payload:error.message})
    })
}
const getProjects = (dispatch) => (userID)=>{
    projectsRef
    .where("userID","==",userID)
    .orderBy("timestamp","desc")
    .onSnapshot((querySnapshot)=>{
        const projects = []
        querySnapshot.forEach((doc)=>{
            const project = doc.data();
            project.id = doc.id;
            projects.push(project)
        });
        dispatch({type:"getProjects", payload:projects})
       
    },
    (error)=>{
        dispatch({type:"feedback", payload:error.message})

    }
    )
}
const clearMessage = (dispatch) => () => {
    dispatch({ type: "feedback", payload: "" });
  };

const deleteProject=(dispatch)=> (id)=>{
    projectsRef
    .doc(id)
    .delete()
    .then(() =>{
        dispatch({type:"feedback", payload:"Recording Deleted"})
        dispatch({type:"deleteProject"})
    })
    .catch((error)=>{
        dispatch({type:"feedback", payload:error.message})
    })
    
}

const updateProject = (dispatch) => (id,title,timestamp, note)=>{
    projectsRef
    .doc(id)
    .update({
        title,
        timestamp,
        note, 
    })
    .then(()=>{
        dispatch({
            type:"updateProject",
            payload: {project:{id,title,timestamp,note}},
        });
        dispatch({type:"feedback", payload:"Your note was updated"})

    })
    .catch((error)=>{
        dispatch({type:"feedback", payload:error.message})
    });
}
const setCurrentProject = (dispatch) => (project) =>{
    dispatch({type:"setCurrentProject", payload:project})
}
export const {Provider, Context} = createDataContext(
    projectReducer,
    {
        createProject,
        getProjects,
        deleteProject,
        updateProject,
        setCurrentProject,
        clearMessage,
    },
    {
        projects:[],
        feedback:"",
        currentProject:{id:"", title:"",timestamp:""}
        
    }
)

