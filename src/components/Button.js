import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native'
const {width} = Dimensions.get('screen');
const Button = ({title})=> {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
        
    )
    
}


const styles = StyleSheet.create({
    buttonContainer: {
        width: width*.5,
        padding:15,
        borderWidth: 2,
        borderColor: '#5bb1b0',
        borderRadius: 10,
        marginBottom:20,
    },
    buttonText:
    {
        textAlign:'center',
        fontSize:20,
    }
})

export default Button;