import React, { useContext, useEffect, useState } from 'react'
import {StyleSheet, Text, View, TextInput,  ScrollView} from 'react-native'
import {ButtonLogin} from "../components/Button"
import {ButtonText} from '../components/ButtonText';
import {ButtonIcon} from '../components/TextInputButton'
import {validate} from 'email-validator'
import {firebase} from '../firebase'
import {Alert} from '../components/Alert'
import {Context as AuthContext} from '../providers/AuthContext'
import { ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';

const LoginPage = ({navigation}) =>{

   const [email,setEmail] = useState('');
   const [emailError,setEmailError] = useState('');
   const [password, setPassword] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [error, setError] = useState('');
   const [isLoading, setIsLoading] = useState(false) //indicador de carga cuando el usuario le de a Login
   const {state, signin, ClearErrorMessage} = useContext(AuthContext);
   
   const { colors } = useTheme();

   useEffect(()=>{
       if (state.errorMessage) ClearErrorMessage();
    },[]);
    useEffect(()=>{
        if (state.errorMessage) 
        {
            setError(state.errorMessage)
            setIsLoading(false)
        }
    },[state.errorMessage]);

   const handleValidEmail = (val)=> {
    if (val === '') setEmailError(true);
    else if (!validate(val)) setEmailError(true)
    else setEmailError(false);
   }

   const handleValidPassword = (val) =>{
       if (val === '') setPasswordError(true);
       else if (val.length <= 6) setPasswordError(true);
       else setPasswordError(false);
   }

   const handlerSignIn = ()=>{
       setIsLoading(true)
       if (passwordError === false && emailError === false)
       {
           signin(email,password);
        }

   };

   const handlePasswordReset = async () => {
    await firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then((response) => {
        console.log('exito')
        navigation.navigate('start')
    })
    .catch((error) => {
        setError(error.message);
        console.log(error.message)
    })
  }

    return(
        <ScrollView contentContainerStyle={[styles.container, {backgroundColor: colors.background}]}>
                {/* Titulo*/}
                <View>    
                    <Text style={styles.text_title}>Login</Text>
                    <Text style={styles.border}></Text>           
                </View>
                {/*Input Correo y  Contraseña*/}
                <View style={styles.inputText}>  
                    {error ? <Alert type="error" title={error}/>:null}  
                    <Text style={styles.email}>E-mail</Text>
                        <TextInput 
                        style={styles.inputEmail} 
                        placeholder='example@gmail.com'
                        onChangeText={setEmail}
                        value={email}
                        onBlur={()=>handleValidEmail(email)}
                        />    
                    {emailError ? <Alert type="error" title="Enter a username" />:null}
                    <Text style={styles.password}>Password</Text>
                        <ButtonIcon 
                        iconName='eye-slash' 
                        placeholderName='Password'
                        onChangeText={setPassword}
                        value={password}
                        onBlur={()=>handleValidPassword(password)}/>
                    {passwordError ? <Alert type="error" title="The password is invalid" />:null}
                        
                </View>

                {/*Forgot Password*/}
                <View style={styles.buttonforgot}>
                    <ButtonText callback={handlePasswordReset} color={"#5BB1B0"}style={styles.text_forgot} text={"Forgot password?"}/>
                </View>
                
                {/* Botton Log In*/}
                <View>
                    <ButtonLogin text={"Log In"} callback={handlerSignIn}/>
                    {isLoading ? 
                    (<ActivityIndicator size="small" color="#5BB1B0"/>)
                    :null}
                </View>
                {/*Boton hacia SigUp */}
                <View style={styles.buttonSigup}>
                    <Text style={[{color: colors.text}]}> Don't have an account?
                        <ButtonText text={"Sign Up"}  callback={()=> navigation.navigate('signUp')} color="#5BB1B0"/>
                    </Text>
                </View>
        </ScrollView>  
    )
}

const styles = StyleSheet.create({ 
    container:{
       flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ecedeb'
    },
    text_title:{
        textAlign: 'center',
        fontSize:60,
        color:'#5bb1b0',
        fontWeight:'600',
        textShadowColor:'#585858',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:1,
    },
    border:{
        height:4,
        width:135,
        backgroundColor:'#5BB1B0',
        justifyContent:'center',
        alignItems:'center',        
    },
    inputText:{
        marginTop:35,         
    },
    email:{
        color:'#a0a29f',
        fontSize:14,   
        marginTop:10,        
    },
    password:{
        color:'#a0a29f',
        fontSize:14,
        marginTop:10,
    },
    inputEmail:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        height:50,
    },
    buttonforgot:{
       marginLeft:180,
       marginBottom:30,  
    },
    buttonSigup:{
        marginTop:10, 
    },   
})

export default LoginPage;

