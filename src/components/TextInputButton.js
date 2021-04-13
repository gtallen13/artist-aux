import React, { useState, useRef } from 'react'
import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native'
import {Icon} from 'react-native-elements'


const ButtonIcon = (
    {
        iconName, 
        placeholderName,
        onChangeText,
        value,
        onBlur,
    }) => {
        const [secureText, setSecureText] = useState(true);
    return (
        <View style={styles.styleButtonPassword}> 
            <TextInput 
            style = {styles.inputPassword} 
            placeholder={placeholderName} 
            secureTextEntry={secureText} 
            onChangeText={onChangeText} 
            value={value}
            onBlur={onBlur}/>
            <TouchableOpacity style={styles.passwordInput}>
                <Icon style = {styles.icon} containerStyle={{marginRight:10 , backgroundColor:'white'}}
                    name={iconName}
                    type='font-awesome'
                    color='black'
                    onPress={()=>{secureText ? setSecureText(false):setSecureText(true)}}                   
            />
            </TouchableOpacity>
        </View>
       
    )
}
 
const ChangePasswordInput = (
    {
        callback
    }) => {
    return (
        <View style={styles.styleButtonPassword}> 
            <TextInput 
            style = {styles.inputPassword}
            value='*******'
            />
            <TouchableOpacity style={styles.passwordInput} onPress={callback}>
                <Icon style = {styles.icon} containerStyle={{marginRight:10 , backgroundColor:'white'}}
                    name='edit'
                    type='font-awesome'
                    color='black'
            />
            </TouchableOpacity>
        </View>       
    )
}

const ToggleTextInput = (
    {
        onChangeText,
        value,
        onBlur,
        callback,
    }) => {
        const [editable, setEditable] = useState(false);
        //al darle al icono de modificar posicionara al usario en el textinput
        //https://es.reactjs.org/docs/hooks-reference.html#useref
        const textInput = useRef(null);
    return (
        <View style={styles.styleButtonPassword}> 
            <TextInput 
            editable={editable}
            style = {styles.inputPassword}   
            onChangeText={onChangeText} 
            value={value}
            onBlur={onBlur}
            placeholder="text"
            ref={textInput}/>
            <TouchableOpacity style={styles.passwordInput} onPress={callback}>
                <Icon style = {styles.icon} containerStyle={{marginRight:10 , backgroundColor:'white'}}
                    name='edit'
                    type='font-awesome'
                    color='black'
                    onPress={()=>{
                        textInput.current.focus()
                        setEditable(!editable)
                    }}
            />
            </TouchableOpacity>
        </View>
       
    )
}

const styles = StyleSheet.create({
    styleButtonPassword:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius:10,
       
    },
    inputPassword:{
        padding: 10,
        width:250,
        height:50,
       

    },
 
})

export {ButtonIcon, ToggleTextInput, ChangePasswordInput};