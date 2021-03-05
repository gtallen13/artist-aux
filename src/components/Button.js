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

const ButtonLogin = ({text}) => {
    return (
        <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.textLogin}>{text}</Text>
        </TouchableOpacity>
    )
}
const HeaderButton = ({icon, callback}) =>{
    return(
        <View style={styles.headerButton}>
            <TouchableOpacity >
                <Icon
                onPress={callback}
                name={icon}
                type="font-awesome"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: width*.5,
        padding:10,
        borderWidth: 2,
        borderColor: '#5bb1b0',
        borderRadius: 10,
        marginBottom:20,
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
    },
    textLogin: {
        textAlign:'center',
        fontSize:20,
        color:'white'
    },
    headerButton:{
        margin:10
    }
})
export {Button, ButtonLogin, HeaderButton};