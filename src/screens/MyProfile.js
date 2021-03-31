import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {ButtonText} from '../components/ButtonText';
import {ButtonLogin} from '../components/Button';
import { ToggleTextInput} from '../components/TextInputButton'
import {Context as AuthContext} from '../providers/AuthContext';
import {firebase} from '../firebase'
import DialogInput from 'react-native-dialog-input'



const MyProfilePage = ({navigation}) => {
    
    const {signout, state} = useContext(AuthContext);
    const [newUsername, setNewUsername] = useState(state.user.username);
    const [newEmail, setNewEmail] = useState(state.user.email);
    const [currentPassword, setCurrentPassword] = useState('');
    const [visiblePrompt, setVisiblePrompt] = useState(false);
    const reauthenticate = (credPassword)=>{
        const user = firebase.auth().currentUser
        const credential = firebase.auth.EmailAuthProvider.credential(state.user.email,credPassword);
        console.log(credPassword)
        // console.log(credential)
        // console.log(user.reauthenticateWithCredential(credential))
        return user.reauthenticateWithCredential(credential)
    }
    const handlerUpdateProfile = (currentPassword)=>{

        //Actualizacion de email
        //https://firebase.google.com/docs/auth/web/manage-users 
        reauthenticate(currentPassword).then(()=>{
            const user = firebase.auth().currentUser
            
            user.updateEmail(newEmail)
            .then(()=>{
                console.log('updatedEmail')
                const usersRef = firebase.firestore().collection("users")
                usersRef
                .doc(state.user.id)
                .update({
                    "username": newUsername,
                    "email": newEmail
                })
                .then(()=>{
                    console.log('updatedUsername')
                })
                .catch((error)=>{
                    console.log(error.message)
                })
            })
            .catch((error)=>{
                console.log(error.message)
            })
            
        })
        .catch((error)=>{
            console.log(error.message)
        })
        setVisiblePrompt(false)
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
                <DialogInput
                isDialogVisible={visiblePrompt}
                message={"Enter your current password"}
                hintInput ={"*****"}
                submitInput={ (passwordCred) => {
                    handlerUpdateProfile(passwordCred)
                } }
                closeDialog={ () => {setVisiblePrompt(false)}}>
                </DialogInput>
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

})

export default MyProfilePage;