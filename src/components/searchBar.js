import React from 'react'
import { StyleSheet, TouchableOpacity,  TextInput, View} from 'react-native'
import { Icon } from 'react-native-elements'



const InputSearch = ({iconName}) => {
    return(
        <View style={styles.buttonView}>
            <TextInput style={styles.textInputs}
            placeholder="Search"/>  
             <ButtonSearch iconName={iconName}
              />
        </View>
    )
}

const ButtonSearch = ({iconName}) => {
    return(
            <TouchableOpacity style={styles.buttonSearch}>
                <Icon
                name={iconName}
                type='font-awesome'
                color='black'
              />
          </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    buttonView:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputs:{
        width: 200,
        height: 40,
        borderRadius: 10,
        display:'flex',
        justifyContent: 'flex-end',
        padding: 20,
        
    },
    
    buttonSearch:{
        width:50,
        display:'flex',
      
    }


})


export {ButtonSearch, InputSearch};