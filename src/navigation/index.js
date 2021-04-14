import React, {useContext,useEffect, useState} from 'react';
import {Context as AuthContext} from '../providers/AuthContext'
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { Context as ThemeContext} from '../providers/ThemeContext';
import { createStackNavigator } from '@react-navigation/stack';
import MyProfilePage from '../screens/MyProfile';
import MyProjects from '../screens/MyProjects';
import ChangePasswordPage from '../screens/ChangePasswordPage';
import Note from '../screens/Note';
import Recordings from '../screens/Recordings';
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUp';
import StartPage from '../screens/StartPage'
import { Icon } from 'react-native-elements'
import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'rgb(0, 0, 0)',
    text: 'rgb(255, 255, 255)',
    color: '#fff'
  },
};

const Navigation = () => {
  const {state: themeState} = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(false);
  const appTheme = darkMode ? DarkTheme : DefaultTheme;
  const { colors } = useTheme();

  useEffect(()=>{
    setDarkMode(themeState.theme);
    console.log(colors);
  },[themeState.theme]);

    const {state, persistLogin} = useContext(AuthContext);

    useEffect(()=>{
        persistLogin();  
    },[]);

    SplashScreen.preventAutoHideAsync();

    if (!state.loading) SplashScreen.hideAsync();

    return(
      <NavigationContainer theme={appTheme}>
        {!state.loading && (
          <>
            {state.loggedIn ? (
              <Stack.Navigator screenOptions = {{headerShown:false}}>
                <Stack.Screen name="projects" component={MyProjects}/>
                <Stack.Screen name="profile" component={MyProfilePage}/>
                <Stack.Screen
                  name="changePassword" 
                  component={ChangePasswordPage}
                  options={{
                    headerTransparent: true,
                    headerStyle: {backgroundColor: '#ecedeb'},
                    headerTitle: "",
                    headerShown: true,
                    headerBackImage:() => (<Icon 
                      size={30}
                      color = {appTheme.colors.text}
                      name='chevron-left' 
                      type='font-awesome'/>),
                  }}  
                  />
                <Stack.Screen name="note" component={Note}/>
                <Stack.Screen name="recording" component={Recordings}/>
              </Stack.Navigator>
            ):(
              <Stack.Navigator screenOptions = {{headerShown:false}}>
                <Stack.Screen name="Start" component={StartPage}/>
                <Stack.Screen 
                  name="Login" 
                  component={LoginPage}
                  options={{
                    headerTransparent: true,
                    headerStyle: {backgroundColor: '#ecedeb'},
                    headerTitle: false,
                    headerShown: true,
                    headerBackImage:() => (<Icon 
                      size={25}
                      color = {appTheme.colors.text}
                      name='chevron-left' 
                      type='font-awesome'/>),
                  }}
                  />
                <Stack.Screen 
                  name="SignUp" 
                  component={SignUpPage}
                  options={{
                    headerTransparent: true,
                    headerStyle: {backgroundColor: '#ecedeb'},
                    headerTitle: false,
                    headerShown: true,
                    headerBackImage:() => (<Icon 
                      size={25}
                      color = {appTheme.colors.text}
                      name='chevron-left' 
                      type='font-awesome'                        
                      />),
                  }}
                  />
              </Stack.Navigator>
            )}
          </>
        )}
      </NavigationContainer>
    )  
}

export default Navigation