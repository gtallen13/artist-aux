import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Input} from 'react-native-elements';
import {ButtonLogin} from '../components/Button';
import {ButtonText, ButtonGoogle} from '../components/ButtonText';
import {ButtonPassword} from '../components/TextImputButton';
// import {SocialIcon} from 'react-native-elements';

const SignUpPage = () =>{
    return(
        <View style={styles.container}>
            <View>
                    <Text style={styles.text_title}>Sign Up</Text>
                    <Text style={styles.border}></Text>
            </View>

                <View style={styles.inputText}>
                    {/* Username */}
                    <Text style={styles.titlePlacerHolder}>Username</Text>
                        <TextInput style={styles.inputs} placeholder='Username' />
                    {/* Email */}
                    <Text style={styles.titlePlacerHolder}>E-mail</Text>
                        <TextInput style={styles.inputs} placeholder='example@gmail.com' />
                    {/* Password */}
                    <Text style={styles.titlePlacerHolder}>Password</Text>
                        <ButtonPassword callback={()=> console.log("Press")} iconName='eye-slash'/>
                    {/* Confirm Password */}
                    <Text style={styles.titlePlacerHolder}>Confirm Paswword</Text>
                        <ButtonPassword callback={()=> console.log("Press")} iconName='eye-slash'/>
                    {/* <SocialIcon 
                        title='Sign In With Google'
                        button
                        type='google'
                    /> */}
                </View> 
            <View style={styles.buttonSignIn}>
                <ButtonLogin text={"Sign In"}/>
            </View>  
            <Text style={styles.buttonLogin}>
                Already registered? <View>
                <ButtonText text={"Log In"}/>
                </View>
            </Text>
            <View >
                <ButtonGoogle logingoogle={"Sign In With Google"}/>                
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
    }

})

export default SignUpPage;