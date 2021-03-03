import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from 'react-native-elements';
import {ButtonLogin} from '../components/Button';
import {ButtonText, ButtonGoogle} from '../components/ButtonText';
// import {SocialIcon} from 'react-native-elements';

const SignUpPage = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.titlecontainer}>
                <Text style={styles.text_title}>Sign Up</Text>
                <Text style={styles.border}></Text>
            </View>
            <View style={styles.inputText}>
                {/* Username */}
                <Text style={styles.titlePlacerHolder}>Username</Text>
                <Input style={styles.inputs} placeholder='Username' inputContainerStyle={{borderBottomColor:'#5BB1B0', backgroundColor:'white', borderRadius:8}}/>
                {/* Email */}
                <Text style={styles.titlePlacerHolder}>E-mail</Text>
                <Input style={styles.inputs} placeholder='example@gmail.com' inputContainerStyle={{borderBottomColor:'#5BB1B0', backgroundColor:'white', borderRadius:8}} />
                {/* Password */}
                <Text style={styles.titlePlacerHolder}>Password</Text>
                <Input style={styles.inputs} placeholder="Password" secureTextEntry={true} inputContainerStyle={{borderBottomColor:'#5BB1B0', backgroundColor:'white', borderRadius:8, width:300}} rightIcon={{type: 'font-awesome', name:'eye-slash'}}/>
                {/* Confirm Password */}
                <Text style={styles.titlePlacerHolder}>Confirm Paswword</Text>
                <Input style={styles.inputs} placeholder="Confirm Password" secureTextEntry={true} inputContainerStyle={{borderBottomColor:'#5BB1B0', backgroundColor:'white', borderRadius:8, width:300}} rightIcon={{type: 'font-awesome', name:'eye-slash'}}/>
                {/* <SocialIcon 
                    title='Sign In With Google'
                    button
                    type='google'
                /> */}
            </View> 
            <View>
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
    titlecontainer:{
        justifyContent: 'center',
        alignItems: 'center'
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
        marginTop: 35
    },
    titlePlacerHolder:{
        color:'#a0a29f',
        fontSize:12,
    },
    inputs:{
        padding: 10
    },
    buttonLogin:{
        padding: 10
    },

})

export default SignUpPage;