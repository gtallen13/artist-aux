import React, { useState } from 'react'
import {StyleSheet, Text, View, TextInput,  ScrollView} from 'react-native'
import {ButtonLogin} from "../components/Button"
import {ButtonText, ButtonGoogle} from '../components/ButtonText';
import {ButtonIcon} from '../components/TextInputButton'
import {validate} from 'email-validator'
import {firebase} from '../firebase'
import {Alert} from '../components/Alert'


const LoginPage = ({navigation}) =>{
   const [email,setEmail] = useState('');
   const [emailError,setEmailError] = useState('');
   const [password, setPassword] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [error, setError] = useState('');


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
       if (passwordError === false && emailError === false)
       {
           firebase
           .auth()
           .signInWithEmailAndPassword(email,password)
           .then((response)=>{
               const uid = response.user.uid;
               const usersRef = firebase.firestore().collection("users");
   
               usersRef
               .doc(uid)
               .get()
               .then((firestoreDocument) =>{
                   if (!firestoreDocument.exists){
                       console.log('User does not exist')
                       setError('User does not exist')
                       return;
                   }
                   const user = firestoreDocument.data();
                   navigation.navigate("projects", {user});
                   console.log(user);
               })
            navigation.navigate('projects');
           })
           .catch((error)=>{
               setError(error.message);
               console.log(error);
           });
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
        console.log(error.message)
    })
  }

    return(
        <ScrollView contentContainerStyle={styles.container}>
                {/* Titulo*/}
                <View>    
                    <Text style={styles.text_title}>Login</Text>
                    <Text style={styles.border}></Text>           
                </View>
                {/*Input Correo y  Contraseña*/}
                <View style={styles.inputText}>    
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
                </View>
                
                {/*Boton para login con google*/}
                <View>
                    <ButtonGoogle logingoogle={"Login Google"}/>                
                </View>
                {/*Boton hacia SigUp */}
                <View style={styles.buttonSigup}>
                    <Text> Don't have an account?
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
    scrollView:{
     
        backgroundColor:'ecedeb',
    },
   
    text_title:{
        textAlign: 'center',
        fontSize:40,
        color:'#5bb1b0',
        fontWeight:'600',
        textShadowColor:'#585858',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:1,
    },
    border:{
        height:3,
        width:100,
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

