import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, NavigationEvents} from 'react-navigation'
import {Icon} from 'react-native-elements'
import {StyleSheet,Text} from 'react-native'
import StartPage from '../screens/StartPage'
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUp';
import MyProfilePage from '../screens/MyProfile';
import MyProjects from '../screens/MyProjects';
import ChangePasswordPage from '../screens/ChangePasswordPage';
import Note from '../screens/Note';

const screens = {
    start:{
        screen:StartPage,  
        navigationOptions:{
            headerShown:false,
        },
    },
    login:{
        screen:LoginPage,
      
    },
    signUp: {
        screen:SignUpPage
    },
    profile: {
        screen: MyProfilePage,
        navigationOptions:{
            headerShown:false,
        },
    },
    projects:{
        screen:MyProjects,
        navigationOptions:{
            headerShown:false,
        }
    },
    changePassword: {
        screen:ChangePasswordPage,
        navigationOptions:{
            headerTitle: () => (<Text style={styles.headerTitle} >Edit Password</Text>),
            headerTitleAlign: 'center'
        }
    },
    note: {
        screen: Note,
        navigationOptions:{
            headerTitle: () => (<Text style={styles.headerTitle} >Hola</Text>),
            headerTitleAlign: 'center'
        }
    }

   
}
const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerBackImage: <Icon name='chevron-left' type='font-awesome'/>,
        headerTitle:false,
        headerStyle:{
            backgroundColor:"#ecedeb",
            
        },
        headerTransparent:true,
    },  
});
const styles = StyleSheet.create({

    headerTitle:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'600'
    },
})
export default createAppContainer(HomeStack);