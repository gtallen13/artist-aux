import React from 'react';
import {View,TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native'
import { Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';


const {width} = Dimensions.get('screen');


const Button = ({title,callback})=> {
    const { colors } = useTheme();
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={callback}>
            <Text style={[styles.buttonText, {color: colors.text}]}>{title}</Text>
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
const HeaderButton = ({icon, callback, size}) =>{
    const { colors } = useTheme();
    return(
        <View style={styles.headerButton}>
            <TouchableOpacity onPress={callback}>
                <Icon
                color = {colors.text}
                name={icon}
                type="font-awesome"
                size={size}/>
            </TouchableOpacity>
        </View>
    )
}
 {/**Button de stop en pantalla nota*/}
const ButtonStopNote = ({icon, color, size, callback}) =>{
    return(
        <View style={styles.buttonStop}>
            <TouchableOpacity onPress={callback}>
                <Icon
                    name={icon}
                    type="font-awesome"
                    color={color}
                    size={size}
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
  
    },
    buttonText: {
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
    },
    buttonLogin: {
        width: width*.8,
        padding:15,
        backgroundColor: '#5bb1b0',
        borderRadius: 10,
        marginBottom:20,  
        marginTop:30, 

        textShadowColor:'#585858',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:1,
    },
    textLogin: {
        textAlign:'center',
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },
    headerButton:{
        margin:10,
    },
    buttonStop:{
        marginRight:10,
        marginLeft:5,
        justifyContent: 'center',
      
    }
})
export {Button, ButtonLogin, HeaderButton, ButtonStopNote};