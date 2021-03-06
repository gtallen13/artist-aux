import React from 'react'
import { StyleSheet, Text, TouchableOpacity,  TextInput} from 'react-native'
import { Icon } from 'react-native-elements'


const InputSearch = ({textSearch}) => {
    return(
        <TouchableOpacity style={styles.textInput}>
           
            <TextInput
                placeholder="Search"/>
            {textSearch}
        </TouchableOpacity>
    )
}

const ButtonSearch = ({icon}) => {
    return(
        <TouchableOpacity style={styles.buttonSearch}>
            <Icon
            name='search'
            type='font-awesome'
            color='black'/>{icon}
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    TextInput:{
        fontSize:'50',

    },
    
    buttonSearch:{
        backgroundColor:'white'
    }


})


export {ButtonSearch, InputSearch};