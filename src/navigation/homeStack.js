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

export default createAppContainer(HomeStack);