import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer, NavigationEvents} from 'react-navigation'
import StartPage from '../screens/StartPage'
import LoginPage from '../screens/LoginPage'
import SignUpPage from '../screens/SignUp';
import MyProfilePage from '../screens/MyProfile';
import MyProjects from '../screens/MyProjects'
import ChangePasswordPage from '../screens/ChangePasswordPage'

const screens = {
    start:{
        screen:StartPage,
        navigationOptions:{
            headerShown:false
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

export default createAppContainer(HomeStack);