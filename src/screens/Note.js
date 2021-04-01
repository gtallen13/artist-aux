import React from 'react'
import {View, TextInput, ScrollView,StyleSheet, Text} from 'react-native'
import { withTheme } from 'react-native-elements'
import {ButtonIcon, ToggleTextInput} from '../components/TextInputButton'

const Note = ({navigation}) => {
    const note = navigation.getParam('note')
    return(
        
        <View style={styles.container}>
              <View style={styles.headerContainer}>    
                    <Text style={styles.headerTitle}>Note</Text>
              </View>
              <View style={styles.noteContainer}>
                 
                        <TextInput
                            multiline={true}
                            style={styles.note}
                            placeholder={"Escribe una nota"}
                        /> 
             
                 
              </View>
              <View style={styles.barBottom}>
                  <ButtonIcon
                    iconName=''
                  />
              </View>
               
        </View>  
             
             

       
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerTitle:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'600',
        
    },
    noteContainer: {
        flex: 10,
        backgroundColor: '#ecedeb',
        textAlignVertical: 'top',
        color: 'white',
       
    },
    note:{
        flex: 10,
        padding: 5,
        height:200,

    },
    barBottom:{
        flex: 3,
        backgroundColor:'#5BB1B0',
 

    }
})

export default Note;

