import React from 'react'
import {Text,StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import StartPage from '../screens/StartPage'
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUp';
import { HeaderButton } from '../components/Button'

const screens = {
    start:{
        screen:StartPage,
        navigationOptions:{
            headerShown:false
        },
    },
    login:{
        screen: LoginPage,
        navigationOptions:{
            headerTitle:()=>(<Text style={styles.headerTitle}>Login</Text>),
            headerRight: () =>(
                <HeaderButton
                icon="plus"
                callback={()=>console.log("hi")}/>
            ),
        },
    },
    signUp: {
        screen:SignUpPage
    },
};

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTitle:false,
        headerStyle:{
            backgroundColor:"#ecedeb",
        },
        headerTransparent:true,
    }
});
const styles = StyleSheet.create({

    headerTitle:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'600'
    }
})
export default createAppContainer(HomeStack);