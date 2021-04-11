import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {ButtonText} from '../components/ButtonText';
import {ButtonLogin} from '../components/Button';
import { ToggleTextInput} from '../components/TextInputButton'
import {Context as AuthContext} from '../providers/AuthContext';
import Dialog from "react-native-dialog";



const MyProfilePage = ({navigation}) => {
    
    const {signout, update ,state } = useContext(AuthContext);
    const [newUsername, setNewUsername] = useState(state.user.username);
    const [newEmail, setNewEmail] = useState(state.user.email);
    const [currentPassword, setCurrentPassword] = useState('')
    const [visiblePrompt, setVisiblePrompt] = useState(false);


    useEffect(()=>{
        console.log(state)
        if (state.updated && state.loggedIn) signout()
    },[state.updated])
    const handlerUpdateProfile = (currentPassword)=>{
        update(newEmail, newUsername, currentPassword, state.user.email, state.user.id) 
    }
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Icon style={styles.headerIcons} name="chevron-left" type="font-awesome" onPress={()=>navigation.navigate('projects')}/>
                <Text style={styles.headerTitle}>My Projects</Text>
                    <ButtonText text = 'Logout' fontSize={20} color='#5BB1B0' callback= {()=>{signout()}}/>
            </View>
            <View style={styles.editContainer}>
                <Avatar size="xlarge" source={require('../../assets/pp.png')}/>
                <View style={styles.ChangeImg}>
                    <ButtonText text={"Change Image"}/> 

                </View>
                    <View style={styles.inputText}>
                            {/* Username */}
                        <Text style={styles.titlePlacerHolder}>Username:</Text>
                            <ToggleTextInput 
                            iconName='edit' 
                            value={newUsername}
                            onChangeText={setNewUsername}
                            />
                        {/* Email */}
                        <Text style={styles.titlePlacerHolder}>Email:</Text>
                            <ToggleTextInput  
                            iconName='edit' 
                            value={newEmail}
                            onChangeText={setNewEmail}
                            />
                        {/* Change Password */}
                        <Text style={styles.titlePlacerHolder}>Change Password:</Text>
                            <ToggleTextInput callback={()=> navigation.navigate('changePassword')} iconName='edit' value='*******'/>
                    </View>
                <View>
                    <ButtonLogin text={"Save"} callback={()=>setVisiblePrompt(true)}/>
                </View>
            </View>
            <Dialog.Container visible={visiblePrompt} onBackdropPress={()=>setVisiblePrompt(false)}>
                <Dialog.Title>Confirm Password</Dialog.Title>
                <Dialog.Description>Please enter your current password</Dialog.Description>
                <Dialog.Input
                secureTextEntry={true}
                onChangeText={setCurrentPassword}
                value={currentPassword}
                wrapperStyle={styles.dialogInput}
                />
                <Dialog.Button 
                label="Cancel" 
                onPress={()=>setVisiblePrompt(false)}/>
                <Dialog.Button 
                label="Confirm" 
                bold={true}
                onPress={()=>handlerUpdateProfile(currentPassword)}/>
            </Dialog.Container>
        </ScrollView> 
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
    dialogInput:{
        borderBottomColor:"#5bb1b0",
        borderBottomWidth:1,

    }

})

export default MyProfilePage;