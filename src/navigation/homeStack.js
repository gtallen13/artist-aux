import React from 'react'
import {Text,StyleSheet} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, NavigationEvents} from 'react-navigation'
import StartPage from '../screens/StartPage'
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUp';
import MyProfilePage from '../screens/MyProfile';
import MyProjects from '../screens/MyProjects'
import {ButtonText} from '../components/ButtonText';
import {HeaderButton} from '../components/Button'
import { Icon } from 'react-native-elements'
const screens = {
    start:{
        screen:StartPage,
        navigationOptions:{
            headerShown:false
        },
    },
    login:{
        screen: LoginPage
        
    },
    signUp: {
        screen:SignUpPage
    },
    profile: {
        screen: MyProfilePage,
        navigationOptions:{
            // headerTitle: () => (<Text style={styles.headerTitle}>Edit Profile</Text>),
            // headerRight: ({navigation}) => (
            //     <ButtonText text="Logout" color="#5BB1B0" fontSize={15} callback={()=>navigation.navigate('start')}/>
            // )
            headerShown:false,
        },
    },
    projects:{
        screen:MyProjects,

        navigationOptions:{
            headerShown:false,
        }
    },
};
const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
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