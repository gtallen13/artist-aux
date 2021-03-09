import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {ButtonLogin} from '../components/Button';
import {ButtonText, ButtonGoogle} from '../components/ButtonText';
import {ButtonIcon} from '../components/TextInputButton';
import {firebase} from '../firebase'
import {validate} from 'email-validator'
import { event } from 'react-native-reanimated';

const SignUpPage = ({navigation}) =>{
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError,setConfirmPasswordError] = useState('');
    const [error, setError] = useState('');

    const handleValidUsername = (val)=>{
        if (val ==='') setUsernameError(true)
        else setUsernameError(false)
    }
    const handleValidEmail = (val)=>{
        if (val === '') setEmailError(true)
        else if (!validate(email)) setEmailError(true)
        else setEmailError(false)
    }
    const handleValidPassword = (val)=>{
        if (val === '') setPasswordError(true)
        else if (val.length <= 6) setPasswordError(true)
        else setPasswordError(false);
    }
    const handleValidConfirmPassword = (val)=>{
        if (val === '') setConfirmPasswordError(true)
        else if (val !== password) setConfirmPasswordError(true)
        else setConfirmPasswordError(false)
    }
    const handlerSignUp = ()=>{
        
        if (usernameError === false && 
            emailError === false &&
            passwordError === false &&
            confirmPasswordError === false)
            {
                firebase.auth()
                .createUserWithEmailAndPassword(email,password)
                .then((response)=>{
                    console.log('Exito!!')
                    navigation.navigate('start');
                })
                .catch((error)=>{
                    console.log(error)
                });
            }
    };
    return(
        <View style={styles.container}>
            <View>
                    <Text style={styles.text_title}>Sign Up</Text>
                    <Text style={styles.border}></Text>
            </View>

                <View style={styles.inputText}>
                    {/* Username */}
                    <Text style={styles.titlePlacerHolder}>Username</Text>
                        <TextInput style={styles.inputs} 
                        placeholder='Username' value={username} 
                        onChangeText={setUsername}
                        onBlur={()=> handleValidUsername(username)}
                        />
                        {usernameError ? <Text style={styles.errorMessage}>Error</Text>:null}
                        
                    {/* Email */}
                    <Text style={styles.titlePlacerHolder}>E-mail</Text>
                        <TextInput 
                        style={styles.inputs} 
                        placeholder='example@gmail.com' 
                        value={email} 
                        onChangeText={setEmail}
                        onBlur={()=>handleValidEmail(email)}
                        />
                        {emailError ? <Text style={styles.errorMessage}>Error</Text>:null}
                    {/* Password */}
                    <Text style={styles.titlePlacerHolder}>Password</Text>
                        <ButtonIcon 
                        callback={()=> console.log("Press")} 
                        iconName='eye-slash' placeholderName='Password' 
                        value={password} 
                        onChangeText={setPassword}
                        onBlur={()=>handleValidPassword (password)}
                        />
                        {passwordError ? <Text style={styles.errorMessage}>Error</Text>:null}
                    {/* Confirm Password */}
                    <Text style={styles.titlePlacerHolder}>Confirm Password</Text>
                        <ButtonIcon 
                        callback={()=> console.log("Press")} 
                        iconName='eye-slash' 
                        placeholderName='Confirm Password' 
                        value={confirmPassword} 
                        onChangeText={setConfirmPassword}
                        onBlur={()=> handleValidConfirmPassword(confirmPassword)}
                        />
                        {confirmPasswordError ? <Text style={styles.errorMessage}>Error</Text>:null}
                </View> 
            <View style={styles.buttonSignIn}>
                <ButtonLogin callback={handlerSignUp} text={"Sign Up"}/>
            </View>  
            <Text style={styles.buttonLogin}>
                Already registered? <View>
                <ButtonText text={"Log In"}/>
                </View>
            </Text>
            <View >
                <ButtonGoogle logingoogle={"Sign Up With Google"} />                
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecedeb'
    },
    text_title:{
        textAlign: 'center',
        fontSize: 40
    },
    border:{
        height: 3,
        width: 140,
        backgroundColor: '#5BB1B0'
    },
    inputText:{
        marginTop: 25
    },
    titlePlacerHolder:{
        color:'#a0a29f',
        fontSize:14,
    },
    inputs:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        height:50,
    },
    buttonSignIn:{
        marginTop: 10
    },
    errorMessage:{
        color:'red',
        fontSize:15,
        fontStyle:'italic'
    }

})

export default SignUpPage;