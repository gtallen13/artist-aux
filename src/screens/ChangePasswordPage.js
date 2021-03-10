import React, { useState } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Icon} from 'react-native-elements'
import {ButtonIcon} from '../components/TextInputButton'
import {ButtonLogin} from '../components/Button'
import {firebase} from '../firebase';

const ChangePasswordPage = ({navigation}) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleReauthenticate = async (currentPassword) => {
        let user = firebase.auth().currentUser;
        let cred = firebase.auth().EmailAuthProvider.credentials(user.email, currentPassword);  
        return user.reauthenticateWithCredential(cred)
    }

    const handleChangePassword = async () => {

        handleReauthenticate(currentPassword).then(() => {
            let user = firebase.auth().currentUser;
            user.updatePassword(newPassword).then(() => {
            console.log('Password was changed');
            }).catch ((error) => {
                console.log(error.message);
            });

        }).catch((error) => {
            console.log(error.message)
        });
    }



   return(
    <View style={styles.container}>
        <View style={styles.inputText}> 
            <Text style={styles.email}>Old Password</Text>
                <ButtonIcon  
                callback={()=> console.log("Press")} 
                iconName='edit' 
                placeholderName='Password'
                onChangeText={setCurrentPassword}
                value={currentPassword}
                />
        
            <Text style={styles.password}>New Password</Text>
                <ButtonIcon 
                callback={()=> console.log("Press")} iconName='edit' 
                placeholderName='Password'
                onChangeText={setNewPassword}
                value={newPassword}
                />
            
            <Text style={styles.password}>Confirm New Password</Text>
                <ButtonIcon 
                callback={()=> console.log("Press")} iconName='edit' 
                placeholderName='Password'/>
        </View>
        <View>
            <ButtonLogin 
            callback={handleChangePassword}
            text={"Change password"}
            
            />
        </View>
    </View>   
   )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ecedeb'
     },
     inputText:{
        marginTop:35,
    },
    email:{
        color:'#a0a29f',
        fontSize:14,   
    },
    password:{
        color:'#a0a29f',
        fontSize:14,
    },
})

export default ChangePasswordPage;