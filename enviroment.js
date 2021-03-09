import Constant from 'expo-constants'

const ENV = {
    dev:{
        apiKey: "AIzaSyBI6G9AbsdmQ73KOpC7eiiKWVb5ALLNNjE",
        authDomain: "artist-aux.firebaseapp.com",
        projectId: "artist-aux",
        storageBucket: "artist-aux.appspot.com",
        messagingSenderId: "465350412664",
        appId: "1:465350412664:web:8830c91a91d7fd5b6ee08d"
    },
    production:{
        apiKey: "AIzaSyBI6G9AbsdmQ73KOpC7eiiKWVb5ALLNNjE",
        authDomain: "artist-aux.firebaseapp.com",
        projectId: "artist-aux",
        storageBucket: "artist-aux.appspot.com",
        messagingSenderId: "465350412664",
        appId: "1:465350412664:web:8830c91a91d7fd5b6ee08d",
    },
};
const getEnvVars = (env = Constant.manifest.releaseChannel)=>{
    if (__DEV__) return ENV.dev;
    else if(env === 'production' || env === 'default') return ENV.production
}

export default getEnvVars;