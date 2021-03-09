import React from 'react'
import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native'
import {Icon} from 'react-native-elements'



const ButtonIcon = (
    {
        iconName, 
        callback, 
        placeholderName,
        onChangeText,
        value
    }) => {
    return (
        <View style={styles.styleButtonPassword}> 
            <TextInput style = {styles.inputPassword} placeholder={placeholderName} secureTextEntry={true} onChangeText={onChangeText} value={value}/>
            <TouchableOpacity onPress={callback} style={styles.passwordInput}>
                <Icon style = {styles.icon} containerStyle={{marginRight:10 , backgroundColor:'white'}}
                    name={iconName}
                    type='font-awesome'
                    color='black'
                   
            />
            </TouchableOpacity>
        </View>
       
    )
}




const styles = StyleSheet.create({
    styleButtonPassword:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius:10,
        marginBottom:10,
       
    },
    inputPassword:{
        padding: 10,
        width:250,
        height:50,
       

    },
 
})

export {ButtonIcon};