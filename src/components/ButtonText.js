import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import { Icon } from 'react-native-elements'

const ButtonText = ({text, color,fontSize, callback})=> {
    return(
        <TouchableOpacity style={styles.textContainer}>
            <Text style={[styles.textbutton, {color:color}, {fontSize:fontSize}]} onPress={callback}>{text}</Text>
        </TouchableOpacity>
    )
}

const TextNote = ({text, color, fontSize, callback}) => {
    return (
        <TouchableOpacity style={styles.textContainer}>
           <Text style={[styles.textbutto, {color:color}, {fontSize:fontSize}]} onPress={callback}>{text}</Text>
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
        fontWeight: '700',
        color:'#5BB1B0',   
        marginLeft: 5,
        marginRight:20,
        borderBottomWidth:2,
        borderBottomColor: '#5bb1b0'
            
    },
    textbutto:{
        fontSize: 13,
        fontWeight: '700',
        color:'#5BB1B0',     
        marginRight:20,
        textAlign:'right'
        
    },

    buttonGoogle:{
        fontSize: 15,
        fontWeight: 500,
        color:'#16307c',   
    },
    textContainer:{
        margin:10,
     
    }
})

export {ButtonText,ButtonGoogle, TextNote}