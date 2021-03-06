import React from 'react'
import { StyleSheet, TouchableOpacity,  TextInput, View} from 'react-native'
import { Icon } from 'react-native-elements'



const InputSearch = ({iconName}) => {
    return(
        <View style={styles.buttonView}>
            <TextInput style={styles.textInputs}
             placeholder="Search"/>  
                 <ButtonSearch iconName={iconName}/>
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

{/**Codigo para agregarlo en las pantallas que se necesite la barra de busqueda
       <InputSearch iconName='search'/>
*/}

const styles = StyleSheet.create({
    buttonView:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
       
    },
    textInputs:{
        width: 250,
        height: 40, 
        padding: 20,   
    },
    buttonSearch:{
        width:50, 
        backgroundColor: '#f3f3f3',
        padding: 10,
       
    }


})


export {ButtonSearch, InputSearch};