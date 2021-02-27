import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import StartPage from '../screens/StartPage'
const screens = {
    start:{
        screen:StartPage,
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);