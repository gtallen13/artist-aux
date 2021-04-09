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
        case "updateProject":
            return{
                ...state,
                projects: state.projects.map((project)=>{
                    if (project.id === action.payload.project.id)
                    {
                        return{
                            ...project,
                            title: action.payload.project.title,
                            timestamp: action.payload.project.timestamp
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

const createProject = (dispatch)=>(title,author,timestamp)=>{
    const data ={
        title,
        userID: author,
        timestamp,
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
            project.push(project)
        });
        dispatch({type:"getProjects", payload:projects})
        dispatch({type:"feedback", payload:"Your project was saved!"});
    },
    (error)=>{
        dispatch({type:"feedback", payload:error.message})

    }
    )
}

const updateProject = (dispatch) => (title,author,timestamp)=>{
    projectsRef
    .doc(id)
    .update({title,author,timestamp})
    .then(()=>{
        dispatch({
            type:"updateProject",
            payload: {project:{title,author,timestamp}},
        });
        dispatch({type:"feedback", payload:"Project Updated"})
    })
    .catch((error)=>{
        dispatch({type:"feedback", payload:error.message})
    });
}

export const {Provider, Context} = createDataContext(
    projectReducer,
    {
        createProject,
        getProjects,
    },
    {
        projects:[],
        feedback:"",
        
    }
)

