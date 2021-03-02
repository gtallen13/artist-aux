import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

const ButtonText = ({text})=> {
    return(
        <TouchableOpacity style={styles.textContainer}>
            <Text style={styles.textbutton}>{text}</Text>
        </TouchableOpacity>
    )
}

const ButtonGoogle = ({logingoogle})=>{
    return (
        <TouchableOpacity>
            <Text style={styles.buttonGoogle}>{logingoogle}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    ButtonText:{
        fontSize: 25,
    },
    buttongoogle:{
        fontSize: 25,

    }
})

export {ButtonText,ButtonGoogle}