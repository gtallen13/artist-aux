import React, {useContext,useEffect} from 'react';
import NavigatorHome from '../navigation/homeStack'
import NavigatorReg from '../navigation/regStack'
import {Context as AuthContext} from '../providers/AuthContext'
import * as SplashScreen from 'expo-splash-screen';
const Navigation = ()=>{
    const {state, persistLogin} = useContext(AuthContext);
    useEffect(()=>{
        persistLogin();
        
    },[]);

    SplashScreen.preventAutoHideAsync();

    if (!state.loading) SplashScreen.hideAsync();

    if (!state.loading && state.loggedIn)
    {
      console.log("home")
      return(
        <NavigatorHome/>
      )
    }
    console.log("reg")
    return(
      <NavigatorReg/>
    )
}

export default Navigation