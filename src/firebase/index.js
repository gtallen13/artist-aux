import firebase from "firebase/app";
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/storage'
import getEnvVars from '../../enviroment'

const {apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId} = getEnvVars();

const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
  };


  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

  export {firebase};