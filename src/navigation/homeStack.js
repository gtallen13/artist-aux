import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {Icon} from 'react-native-elements'
import {StyleSheet,Text} from 'react-native'
import MyProfilePage from '../screens/MyProfile';
import MyProjects from '../screens/MyProjects';
import ChangePasswordPage from '../screens/ChangePasswordPage';
import Note from '../screens/Note';
import Recordings from '../screens/Recordings';
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
            headerTitle: () => <Text style={styles.headerTitle} >Edit Password</Text>,
            headerTitleAlign: 'center'
        }
    },
    note: {
        screen: Note,
        navigationOptions:{
            headerShown:false,
        }
    },
    recording:{
        screen:Recordings,
        navigationOptions:{
            headerShown:false,
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