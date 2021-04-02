import React from 'react';
import {View,TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native'
import { Icon } from 'react-native-elements';
const {width} = Dimensions.get('screen');
const Button = ({title,callback})=> {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={callback}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>        
    )    
}

const ButtonLogin = ({text,callback}) => {
    return (
        <TouchableOpacity style={styles.buttonLogin} onPress={callback}>
            <Text style={styles.textLogin}>{text}</Text>
        </TouchableOpacity>
    )
}
const HeaderButton = ({icon, callback}) =>{
    return(
        <View style={styles.headerButton}>
            <TouchableOpacity onPress={callback}>
                <Icon
                name={icon}
                type="font-awesome"/>
            </TouchableOpacity>
        </View>
    )
}
 {/**Button de stop en pantalla nota*/}
const ButtonStopNote = ({icon, color, callback}) =>{
    return(
        <View style={styles.buttonStop}>
            <TouchableOpacity onPress={callback}>
                <Icon
                    name={icon}
                    type="font-awesome"
                    color={color}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: width*.5,
        padding:10,
        borderWidth: 3,
        borderColor: '#5bb1b0',
        borderRadius: 10,
        marginBottom:20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
  
    },
    buttonText: {
        textAlign:'center',
        fontSize:20,
    },
    buttonLogin: {
        width: width*.9,
        padding:10,
        backgroundColor: '#5bb1b0',
        borderRadius: 10,
        marginBottom:20,  
        marginTop:30, 
    },
    textLogin: {
        textAlign:'center',
        fontSize:20,
        color:'white',
        fontWeight:'600'
    },
    headerButton:{
        margin:10
    },
    buttonStop:{
        marginRight:10,
        marginLeft:5,
   
    }
})
export {Button, ButtonLogin, HeaderButton, ButtonStopNote};