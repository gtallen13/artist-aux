import React, { useContext, useEffect, useState } from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import {ButtonLogin} from '../components/Button';
import {ButtonText} from '../components/ButtonText';
import {ButtonIcon} from '../components/TextInputButton';
import {validate} from 'email-validator'
import {Alert} from '../components/Alert'
import {Context as AuthContext} from "../providers/AuthContext";
import { useTheme } from '@react-navigation/native';

const SignUp = ({navigation}) =>{
    const {state, signup} = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError,setConfirmPasswordError] = useState('');
    const [error, setError] = useState('');
    const { colors } = useTheme();

    useEffect(()=>{
        if (state.errorMessage) clearErrorMessage()
    },[]);
    useEffect(()=>{
        if (state.errorMessage) setError(state.errorMessage);
    },[state.errorMessage]);
    useEffect(()=>{
        if (state.registered) navigation.navigate('start')
    },[state]);

    //Validaciones
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
        
        signup(email, password, username);
    };
    return(
        <ScrollView contentContainerStyle={[styles.container, {backgroundColor: colors.background}]}>
            <View>
                <Text style={styles.text_title}>Sign Up</Text>
                <Text style={styles.border}></Text>
            </View>
                <View style={styles.inputText}>
                    {error ? <Alert type="error" title={error}/>:null}
                    {/* Username */}
                    <Text style={styles.titlePlacerHolder}>Username</Text>
                        <TextInput style={styles.inputs} 
                        placeholder='Username' value={username} 
                        onChangeText={setUsername}
                        onBlur={()=> handleValidUsername(username)}
                        />
                        {usernameError ? <Alert type="error" title="Enter a username" />:null}
                        
                    {/* Email */}
                    <Text style={styles.titlePlacerHolder}>E-mail</Text>
                        <TextInput 
                        style={styles.inputs} 
                        placeholder='example@gmail.com' 
                        value={email} 
                        onChangeText={setEmail}
                        onBlur={()=>handleValidEmail(email)}
                        />
                        {emailError ?  <Alert type="error" title="The email is  invalid" />:null}
                    {/* Password */}
                    <Text style={styles.titlePlacerHolder}>Password</Text>
                        <ButtonIcon 
                        iconName='eye-slash' placeholderName='Password' 
                        value={password} 
                        onChangeText={setPassword}
                        onBlur={()=>handleValidPassword (password)}
                        />
                        {passwordError ?  <Alert type="error" title="The password is invalid" />:null}
                    {/* Confirm Password */}
                    <Text style={styles.titlePlacerHolder}>Confirm Password</Text>
                        <ButtonIcon  
                        iconName='eye-slash' 
                        placeholderName='Confirm Password' 
                        value={confirmPassword} 
                        onChangeText={setConfirmPassword}
                        onBlur={()=> handleValidConfirmPassword(confirmPassword)}
                        />
                        {confirmPasswordError ?  <Alert type="error" title="The passwords don't match" />:null}
                </View> 
            <View style={styles.buttonSignIn}>
                <ButtonLogin callback={handlerSignUp} text={"Sign Up"}/>
            </View>  
            <Text style={[styles.buttonLogin, {color: colors.text}]}> Already registered? 
                    <ButtonText text={"Log In"} callback={()=> navigation.navigate('login')} color="#5bb1b0"/>
            </Text>
            
        </ScrollView>
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
        fontSize: 60,
        color:'#5bb1b0',
        fontWeight:'600',
        textShadowColor:'#585858',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:1,
    },
    border:{
        height: 4,
        width: 185,
        backgroundColor: '#5BB1B0'
    },
    inputText:{
        marginTop: 25
    },
    titlePlacerHolder:{
        color:'#a0a29f',
        fontSize:14,
        marginTop:10,
    },
    inputs:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
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

export default SignUp;