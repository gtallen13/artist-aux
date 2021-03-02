import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Button from "../components/Button"
import {ButtonText, ButtonGoogle} from '../components/ButtonText';


const LoginPage = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.titlecontainer}>
                <Text style={styles.text_title}>Login</Text>
                <Text style={styles.border}></Text>
            </View>
            <View style={styles.inputText}>
                <Text style={styles.email}>Enter your email</Text>
                    <Input style={styles.inputEmail} placeholder='email@gmaill.com' inputContainerStyle={{borderBottomColor:'#5BB1B0'}} leftIcon={{ type: 'font-awesome', name: 'envelope' }}/>       
                <Text style={styles.password}>Enter your password</Text>
                    <Input style={styles.inputPassword} placeholder="Password" secureTextEntry={true} inputContainerStyle={{borderBottomColor:'#5BB1B0'}} leftIcon={{type: 'font-awesome', name:'lock'}}/>
            </View>
            <View style={styles.buttonforgot}>
                <ButtonText text={"Forgot password?"}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title={"Enter"}/>
            </View>
            <View style={styles.buttongoogle}>
                <ButtonGoogle logingoogle={"Login Whith Google"}/>
                
            </View>
            <View style={styles.buttonSigup}>
                <ButtonText text={"Don't have an account? Sig up"}/>
            </View>
        </View>

       
    )
}

const styles = StyleSheet.create({
    container:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    titlecontainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    inputText:{
        flex:3,
        justifyContent:'center',
    },
    text_title:{
        textAlign: 'center',
        fontSize:40,
    },
    border:{
        height:5,
        width:100,
        backgroundColor:'#5BB1B0',
     
    },
    email:{
        fontSize:15,
        fontWeight:600,
    },
    buttongoogle:{
 
    },
    buttonforgot:{

       marginLeft: 140,
       
    },
    buttonSigup:{
   
        marginBottom:10,
    }
})

export default LoginPage;

