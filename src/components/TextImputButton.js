import React from 'react'
import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native'
import {Icon} from 'react-native-elements'



const ButtonPassword = ({iconName, callback}) => {
    return (
        <View style={styles.styleButtonPassword}> 
            <TextInput style = {styles.inputPassword} placeholder='Password' secureTextEntry={true}/>
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
    },
    inputPassword:{
        padding: 10,
       
        backgroundColor:'white',
        borderBottomLeftRadius:8,
        borderTopLeftRadius:8,
        width:250,
    

    },
    icon:{
      padding: 8,
      borderBottomRightRadius:8,
      borderTopRightRadius:8,
    

    }
})

export {ButtonPassword};