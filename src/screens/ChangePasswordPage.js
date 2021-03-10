import React, { useState } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {ButtonIcon} from '../components/TextInputButton'
import {ButtonLogin} from '../components/Button'
import {firebase} from '../firebase';
import {Alert} from '../components/Alert';

const ChangePasswordPage = ({navigation}) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [currentPasswordError, setCurrentPasswordError] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleValidCurrentPassword = (val) => {
        if (val === '') setCurrentPasswordError(true)
        else if (val.length <= 6) setCurrentPasswordError(true)
        else setCurrentPasswordError(false);
    }

    const handleValidNewPassword = (val) => {
        if (val === '') setNewPasswordError(true)
        else if (val.length <= 6) setNewPasswordError(true)
        else setNewPasswordError(false);
    }

    const handleValidNewConfirmPassword = (val)=>{
        if (val === '') setConfirmPasswordError(true)
        else if (val !== newPassword) setConfirmPasswordError(true)
        else setConfirmPasswordError(false)
    }

    const handleReauthenticate = async (currentPassword) => {
        let user = firebase.auth().currentUser;
        let cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);  
        return user.reauthenticateWithCredential(cred)
    }

    const handleChangePassword = async () => {
        if (currentPasswordError === false && 
            newPasswordError === false &&
            confirmPasswordError === false)
            {
                handleReauthenticate(currentPassword).then(() => {
                    let user = firebase.auth().currentUser;
                    user.updatePassword(newPassword).then(() => {
                    console.log('Password was changed');
                        navigation.navigate('start');
                    }).catch ((error) => {
                        console.log(error.message);
                    });
                }).catch((error) => {
                    console.log(error.message)
                });
            }   
    }

   return(
    <View style={styles.container}>
        <View style={styles.inputText}> 
            <Text style={styles.email}>Old Password</Text>
                <ButtonIcon  
                callback={()=> console.log("Press")} 
                iconName='eye-slash' 
                placeholderName='Password'
                onChangeText={setCurrentPassword}
                value={currentPassword}
                onBlur={()=>
                handleValidCurrentPassword (currentPassword)}
                />
                {currentPasswordError ?  <Alert type="error" title="The password is invalid" />:null}
        
            <Text style={styles.password}>New Password</Text>
                <ButtonIcon 
                callback={()=> console.log("Press")} 
                iconName='eye-slash' 
                placeholderName='Password'
                onChangeText={setNewPassword}
                value={newPassword}
                onBlur={()=>
                handleValidNewPassword (newPassword)}
                />
                {newPasswordError ?  <Alert type="error" title="The password is invalid" />:null}
            
            <Text style={styles.password}>Confirm New Password</Text>
                <ButtonIcon 
                callback={()=> console.log("Press")} 
                iconName='eye-slash' 
                placeholderName='Password'
                value={confirmPassword} 
                onChangeText={setConfirmPassword}
                onBlur={()=> handleValidNewConfirmPassword(confirmPassword)}
                />
                {confirmPasswordError ?  <Alert type="error" title="The password is invalid" />:null}
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