import React from 'react'
import {Text} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import StartPage from '../screens/StartPage'
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUp';

const screens = {
    start:{
        screen:StartPage,
        navigationOptions:{
            headerShown:false
        }
    },
    login:{
        screen: LoginPage,
        navigationOptions:{
            headerTitle:()=>(<Text style={styles.headerTitle}>Login</Text>),
            headerRight: () =>(
                <HeaderButton icon="plus" callback={()=>console.log("Add projects")}/>
            ),
            headerLeft: ()=>(
                <HeaderButton icon="user" callback={()=>console.log("My Profile")}/>
            )
        },
    },
    signUp: {
        screen:SignUpPage
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTitle:false
    }
});

export default createAppContainer(HomeStack);