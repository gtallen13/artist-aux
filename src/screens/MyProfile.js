import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Avatar, Input, Icon} from 'react-native-elements';
import {ButtonText} from '../components/ButtonText';
import {ButtonLogin} from '../components/Button';
import {ButtonIcon, ToggleTextInput} from '../components/TextInputButton'
import {firebase} from '../firebase'

const MyProfilePage = ({navigation}) => {
    const handlerLogout = async () => {
        await firebase.auth().signOut()
        navigation.navigate('start');
    }
    const user = navigation.getParam('user')
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Icon style={styles.headerIcons} name="chevron-left" type="font-awesome" onPress={()=>navigation.navigate('projects')}/>
                <Text style={styles.headerTitle}>My Projects</Text>
                    <ButtonText text = 'Logout' fontSize={20} color='#5BB1B0' callback= {handlerLogout}/>
            </View>
            <View style={styles.editContainer}>
                <Avatar size="xlarge" rounded source={require('../../assets/pp.jpg')}/>
                <View style={styles.ChangeImg}>
                    <ButtonText text={"Change Image"}/> 
                </View>
                    <View style={styles.inputText}>
                            {/* Username */}
                        <Text style={styles.titlePlacerHolder}>Username:</Text>
                            <ToggleTextInput callback={()=> console.log("Press")} iconName='edit' value={user.username}/>
                        {/* Email */}
                        <Text style={styles.titlePlacerHolder}>Email:</Text>
                            <ToggleTextInput callback={()=> console.log("Press")} iconName='edit' value={user.email}/>
                        {/* Change Password */}
                        <Text style={styles.titlePlacerHolder}>Change Password:</Text>
                            <ToggleTextInput callback={()=> navigation.navigate('changePassword')} iconName='edit' value='*******'/>
                    </View>
                <View>
                    <ButtonLogin text={"Save"}/>
                </View>
            </View>
        </View> 
    )
    
}


    

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ecedeb'
    },
    editContainer:{
        flex:8,
        justifyContent:'center',
        alignItems:'center',
    },
    ChangeImg:{
        padding: 10
    },
    titlePlacerHolder:{
        color:'#a0a29f',
        fontSize:12,
    },
    inputs:{
        padding: 10
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    headerIcons:{
        flex:1,
        padding:10,
    },
    headerTitle:{
        flex:1,
        textAlign:'center',
        fontSize:25,
        fontWeight:'600',
    },

})

export default MyProfilePage;