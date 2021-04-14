import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Switch} from 'react-native';
import {Icon} from 'react-native-elements';
import {ButtonText} from '../components/ButtonText';
import {ButtonLogin} from '../components/Button';
import { ToggleTextInput, ChangePasswordInput} from '../components/TextInputButton'
import {Context as AuthContext} from '../providers/AuthContext';
import Dialog from "react-native-dialog";
import { useTheme } from '@react-navigation/native';
import { Context as ThemeContext} from '../providers/ThemeContext';
import { color } from 'react-native-reanimated';

const MyProfilePage = ({navigation}) => {    
    const {signout, update ,state } = useContext(AuthContext);
    const [newUsername, setNewUsername] = useState(state.user.username);
    const [newEmail, setNewEmail] = useState(state.user.email);
    const [currentPassword, setCurrentPassword] = useState('')
    const [visiblePrompt, setVisiblePrompt] = useState(false);    
    const [isEnabled, setIsEnabled] = useState(false);
    const {state: themeState, toggleTheme} = useContext(ThemeContext);
    const { colors } = useTheme();

    const handlerToggleTheme = () =>{
        if (themeState.theme){
            toggleTheme(false);  
        }
        else{
            toggleTheme(true);           
        }
        setIsEnabled (!isEnabled);
    }

    useEffect(()=>{
        console.log(state)
        if (state.updated && state.loggedIn) signout()
    },[state.updated])

    const handlerUpdateProfile = (currentPassword)=>{
        update(newEmail, newUsername, currentPassword, state.user.email, state.user.id) 
    }

    return(
        <ScrollView contentContainerStyle={[styles.container, {backgroundColor: colors.background}]}>
            <View style={styles.headerContainer}>
                <Icon 
                    style={styles.headerIcons}
                    color = {colors.text}
                    size={30} 
                    name="chevron-left" 
                    type="font-awesome" 
                    onPress={()=>navigation.navigate('projects')}          
                />
                <Text style={[styles.headerTitle, {color: colors.text}]}>My Profile</Text>
                    <ButtonText text = 'Logout' 
                        fontSize={20} 
                        color='#5BB1B0' 
                        callback= {()=>{signout()}}/>
            </View>
            <View style={styles.editContainer}>
                <Icon
                    color = {colors.text}
                    size={200} 
                    name="user" 
                    type="font-awesome"                    
                />
                    <View style={styles.inputText}>
                        <View style={styles.jaguar}>
                            {/**Modo oscuro */}
                            <Text style={[styles.textDarkMode, {color: colors.text}]}>Dark Mode
                            </Text>
                                <Switch style={styles.switch}
                                    trackColor={{ false: "#767577", true: "#ffffff" }}
                                    thumbColor={themeState.theme ? "#5bb1b0" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={handlerToggleTheme}
                                    value={themeState.theme}
                                />
                        </View> 
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
                            <ChangePasswordInput callback={()=> navigation.navigate('changePassword')} />
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
        flex:9,
        justifyContent:'center',
        alignItems:'center',
    },
    titlePlacerHolder:{
        color:'#a0a29f',
        fontSize:12,
        marginTop:20,
    },
    inputs:{
        padding: 10
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingLeft:10,
        paddingTop:10,
        
     
    },
    headerIcons:{
        flex:1,
       
    },
    headerTitle:{
        flex:1,
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:10,
    },
    textDarkMode:{
        fontSize:18,
        marginRight:10,
       
    },
    jaguar:{
        flexDirection: 'row',
        alignItems: "center",
    
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    dialogInput:{
        borderBottomColor:"#5bb1b0",
        borderBottomWidth:1,
    }
})

export default MyProfilePage;