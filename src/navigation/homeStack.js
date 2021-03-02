<<<<<<< HEAD
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import StartPage from '../screens/StartPage'
import LoginPage from '../screens/LoginPage'

const screens = {
    start:{
        screen:LoginPage,
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerShown: false
    }
});
=======
import {createStackNavigator} from 'react-native-stack'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import StartPage from '../screens/StartPage'
const screens = {
    start:{
        screen:StartPage,
    }
}

const HomeStack = createStackNavigator(screens);

>>>>>>> 305e427d833e1041aa1b70672c3105a9f8605a05
export default createAppContainer(HomeStack);