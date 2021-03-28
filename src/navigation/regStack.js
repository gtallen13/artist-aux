import React from 'react'
import {Icon} from 'react-native-elements'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUp';
import StartPage from '../screens/StartPage'

const screens ={
    Start:{
        screen:StartPage,
        navigationOptions:{
            headerShown:false,
        },
    },
    Login:{
        screen:LoginPage
    },
    SignUp:{
        screen:SignUpPage
    },
}
const RegStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerBackImage: <Icon name='chevron-left' type='font-awesome'/>,
        headerTitle:false,
        headerStyle:{
            backgroundColor:"#ecedeb",
        },
        headerTransparent:true,
    },  
});
export default createAppContainer(RegStack)