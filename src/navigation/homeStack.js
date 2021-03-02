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
export default createAppContainer(HomeStack);