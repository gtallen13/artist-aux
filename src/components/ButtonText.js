import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'

const ButtonText = ({text})=> {
    return(
        <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.textbutton}>{text}</Text>
        </TouchableOpacity>
    )
}

const ButtonGoogle = ({logingoogle})=>{
    return (
        <TouchableOpacity styles={styles.iconGoogle}>
            <Text style={styles.buttonGoogle}>   
            <Icon containerStyle={{marginRight:10}} name='google'
            type='font-awesome'
            color='#517fa4'
            />{logingoogle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({    
    textbutton:{
        fontSize: 13,
        fontWeight: 300,
        color:'#5BB1B0',       
    },
    buttonGoogle:{
        fontSize: 15,
        fontWeight: 500,
        color:'#16307c',   
    }
})

export {ButtonText,ButtonGoogle}