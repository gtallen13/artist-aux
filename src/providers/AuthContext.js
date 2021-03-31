import createDataContext from './createDataContext';
import {firebase} from '../firebase';

const authReducer = (state,action)=>{
    switch(action.type)
    {
        case "errorMessage":
            return {...state, errorMessage: action.payload}
        case "signin":
            return {...state, user:action.payload, loggedIn:true};
        case "signout":
            return {...state, user:action.payload, loggedIn:false};
        case "persistLogin":
            return{
                ...state,
                user: action.payload.user,
                loggedIn: action.payload.loggedIn, 
                loading: false,
            };
        case "update":
            return{
                ...state,
                user: action.payload,
                updated: false
            }
        case "signup":
            return{
                ...state,
                user: action.payload.user,
                registered:true,
            };
        default:
            return state;
    }
}
//reautenticando el usario para cambiar correo
const reauthenticate = (credPassword, credEmail)=>{
    const user = firebase.auth().currentUser
    const credential = firebase.auth.EmailAuthProvider.credential(credEmail,credPassword);
    return user.reauthenticateWithCredential(credential)
}
const update = (dispatch) => 
(
    newEmail, 
    newUsername, 
    currentPassword, 
    currentEmail,
    id

)=>{
    //Actualizacion de email
    //https://firebase.google.com/docs/auth/web/manage-users 
    reauthenticate(currentPassword,currentEmail).then(()=>{
        const user = firebase.auth().currentUser
        
        user.updateEmail(newEmail)
        .then(()=>{
            const usersRef = firebase.firestore().collection("users")
            usersRef
            .doc(id)
            .update({
                "username": newUsername,
                "email": newEmail
            })
            .then(()=>{
                console.log('updatedUsername')
            })
                .catch((error)=>{
                    console.log(error.message)
                })
            })
            .catch((error)=>{
                console.log(error.message)
            })
            console.log("updatedEmail")
            const data ={
                username: newUsername,
                email: newEmail
            }
            dispatch({type:"update",payload:{user:data, updated: true}})
        })
        .catch((error)=>{
            dispatch({type:"errorMessage",payload:error.message})
            console.log(error.message)
        })
}
const signin = (dispatch) => (email,password)=>{
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password, )
    .then((response) =>{
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
        .doc(uid)
        .get()
        .then((firestoreDocument)=>{
            if (!firestoreDocument.exists)
            {
                dispatch({
                    type:"errorMessage",
                    payload:"User does not exist in the database",
                });
            }
            else
            {
                dispatch({type: "errorMessage", payload:""})
                dispatch({type: "signin", payload:firestoreDocument.data()});
            }
        });
    })
    .catch((error)=>{
        dispatch({type:"errorMessage", payload:error.message});
    })
};

const signout = (dispatch)=> ()=>{
    firebase
    .auth()
    .signOut()
    .then(()=>{
        dispatch({type:"signout", payload:{}})
    })
    .catch((error)=>{
        dispatch({type:"errorMessage", payload:error.message})
    })
}
const persistLogin = (dispatch) =>()=>{
    const usersRef = firebase.firestore().collection("users");

    firebase.auth().onAuthStateChanged((user)=>{
        if (user)
        {
            usersRef
            .doc(user.uid)
            .get()
            .then((document)=>{
                dispatch({
                    type:'persistLogin',
                    payload:{user: document.data(), loggedIn:true},
                })
            })
            .catch((error)=>{
                dispatch({
                    type:"errorMessage",
                    payload: error.message,
                })
            })
        }
        else
        {
            dispatch({
                type:"persistLogin",
                payload:{user:{}, loggedIn:false}
            })
        }
    })
}
const signup = (dispatch) => (email, password, username)=>{
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((response)=>{
        const uid = response.user.uid;
        const data = {
            id:uid,
            email,
            username,
        };

        const usersRef = firebase.firestore().collection("users");

        usersRef
        .doc(uid)
        .set(data)
        .then(()=>{
            dispatch({
                type:"signup",
                payload: {user:data, registered:true},
            });
        })
        .catch((error)=>{
            dispatch({
                type:"errorMessage",
                payload: error.message
            });
        });
        dispatch({
            type:"errorMessage",
            payload: ""
        });
    })
}

const ClearErrorMessage = (dispatch)=>()=>{
    dispatch({type:"errorMessage", payload:""});
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {
        signin,
        signout,
        signup,
        persistLogin,
        update,
        ClearErrorMessage,
    },
    {
        user:{},
        errorMessage:"",
        loggedIn:false,
        loading:true,
        registered:false,
        updated:false
    }

)