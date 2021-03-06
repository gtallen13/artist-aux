import React from 'react'
import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native'
import {Icon} from 'react-native-elements'



const ButtonPassword = ({iconName, callback}) => {
    return (
        <View styles={styles.styleButtonPassword}> 
            <TextInput styles = {styles.inputPassword} placeholder="Password" secureTextEntry={true} inputContainerStyle={{borderBottomColor:'#5BB1B0', backgroundColor:'white', borderRadius:8, width:300}} />
            <TouchableOpacity onPress={callback} style={styles.passwordInput}>
                <Icon containerStyle={{marginRight:10}}
                    name={iconName}
                    type='font-awesome'
                    color='#517fa4'
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
    }
})

export {ButtonPassword};