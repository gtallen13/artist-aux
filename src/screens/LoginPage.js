import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { Input } from 'react-native-elements';
import {ButtonLogin} from "../components/Button"
import {ButtonText, ButtonGoogle} from '../components/ButtonText';
import { InputSearch} from '../components/searchBar';
import {ButtonPassword} from '../components/TextImputButton'

const LoginPage = () =>{
   
    return(
        <View style={styles.container}>
            {/* Titulo*/}
            <View style={styles.titlecontainer}>
              
                <Text style={styles.text_title}>Login</Text>
                <Text style={styles.border}></Text>
           
            </View>
            {/*Input Correo y  Contraseña*/}
            <View style={styles.inputText}>
                
                <Text style={styles.email}>E-mail</Text>
                    <Input style={styles.inputEmail} placeholder='example@gmail.com' inputContainerStyle={{borderBottomColor:'#5BB1B0', backgroundColor:'white', borderRadius:8}} />    
                <Text style={styles.password}>Password</Text>
                    <ButtonPassword callback={()=> console.log("Press")} iconName='eye-slash'/>
                
                    
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
                <ButtonText text={"Don't have an account?"}/>
            </View>

            {/** */}
            <View style={styles.input}>
                <InputSearch iconName='search'/>
              
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
    input:{
        display:'flex',
    },
    titlecontainer:{       
        justifyContent: 'center',
        alignItems:'center',
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
    email:{
        color:'#a0a29f',
        fontSize:12,   
     
    },
    password:{
        color:'#a0a29f',
        fontSize:12,
    },
    inputEmail:{
        padding: 10,
        borderColor: 'none',
      
    },
    inputText:{
        marginTop:35,  
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

