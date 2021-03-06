import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {StyleSheet} from 'react-native'
import StartPage from '../screens/StartPage'
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUp';
import MyProfilePage from '../screens/MyProfile';
const screens = {
    start:{
        screen:StartPage,
        navigationOptions:{
            headerShown:false
        }
    },
    login:{
        screen: MyProfilePage
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