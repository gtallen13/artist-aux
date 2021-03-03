import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import StartPage from '../screens/StartPage'
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUp';

const screens = {
    start:{
        screen: SignUpPage,
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerShown: false
    }
});
export default createAppContainer(HomeStack);