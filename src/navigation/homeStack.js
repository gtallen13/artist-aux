import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {Icon} from 'react-native-elements'
import {StyleSheet,Text} from 'react-native'
import StartPage from '../screens/StartPage'
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUp';
import MyProfilePage from '../screens/MyProfile';
import MyProjects from '../screens/MyProjects'
import ChangePasswordPage from '../screens/ChangePasswordPage'


const screens = {
    projects:{
        screen:MyProjects,
        navigationOptions:{
            headerShown:false,
        }
    },
    profile: {
        screen: MyProfilePage,
        navigationOptions:{
            headerShown:false,
        },
    },
    changePassword: {
        screen:ChangePasswordPage,
        navigationOptions:{
            headerTitle: () => (<Text style={styles.headerTitle} >Edit Password</Text>),
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