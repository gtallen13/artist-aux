import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'
import {ButtonLogin} from "../components/Button"
import {ButtonText, ButtonGoogle} from '../components/ButtonText';
import {ButtonIcon} from '../components/TextInputButton'

const LoginPage = () =>{
   
    return(
        <View style={styles.container}>
            {/* Titulo*/}
            <View>
    
                <Text style={styles.text_title}>Login</Text>
                    <Text style={styles.border}></Text>
           
            </View>
            {/*Input Correo y  Contraseña*/}
            <View style={styles.inputText}>
    
                <Text style={styles.email}>E-mail</Text>
                    <TextInput style={styles.inputEmail} placeholder='example@gmail.com'  />    
                
                <Text style={styles.password}>Password</Text>
                    <ButtonIcon callback={()=> console.log("Press")} iconName='eye-slash' placeholderName='Password'/>
                
                    
            </View>

            {/*Forgot Password*/}
            <View style={styles.buttonforgot}>
                <ButtonText style={styles.text_forgot} text={"Forgot password?"}/>
            </View>
            
            {/* Botton Log In*/}
            <View>
                <ButtonLogin text={"Log In"}/>
            </View>
            
            {/*Boton para login con google*/}
            <View>
                <ButtonGoogle logingoogle={"Login Google"}/>                
            </View>
            
            {/*Boton hacia SigUp */}
            <View style={styles.buttonSigup}>
                <Text> Don't have an account?
                <ButtonText text={"Sign Up"}/>
                    </Text>
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
    text_title:{
        textAlign: 'center',
        fontSize:40,
    },
    border:{
        height:3,
        width:100,
        backgroundColor:'#5BB1B0',
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
    inputEmail:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        height:50,
     
    },

    buttonforgot:{
       marginLeft:200,
       marginBottom:40,  
    },
    buttonSigup:{
        marginTop:10, 
    },
   
})

export default LoginPage;

