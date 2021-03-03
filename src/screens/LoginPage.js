import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { Input } from 'react-native-elements';
import {ButtonLogin} from "../components/Button"
import {ButtonText, ButtonGoogle} from '../components/ButtonText';

const LoginPage = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.titlecontainer}>
                <Text style={styles.text_title}>Login</Text>
                <Text style={styles.border}></Text>
            </View>
            <View style={styles.inputText}>
                <Text style={styles.email}>E-mail</Text>
                    <Input style={styles.inputEmail} placeholder='example@gmail.com' inputContainerStyle={{borderBottomColor:'#5BB1B0', backgroundColor:'white', borderRadius:8}} />       
                <Text style={styles.password}>Password</Text>
                    <Input style={styles.inputPassword} placeholder="Password" secureTextEntry={true} inputContainerStyle={{borderBottomColor:'#5BB1B0', backgroundColor:'white', borderRadius:8, width:300}} rightIcon={{type: 'font-awesome', name:'eye-slash', color:'#a0a29f'}}/>
            </View>
            <View style={styles.buttonforgot}>
                <ButtonText style={styles.text_forgot} text={"Forgot password?"}/>
            </View>
            <View>
                <ButtonLogin text={"Log In"}/>
            </View>
            <View>
                <ButtonGoogle logingoogle={"Login Google"}/>                
            </View>
            <View style={styles.buttonSigup}>
                <ButtonText text={"Don't have an account?"}/>
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
    },
    inputPassword:{
        padding: 10,
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

