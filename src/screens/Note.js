import React from 'react'
import {View, TextInput, ScrollView,StyleSheet, Text} from 'react-native'
import { ButtonStopNote } from '../components/Button'


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
                    <View style={styles.viewPlay}>
                        <View style={styles.leftbar}/>
                          <ButtonStopNote
                            icon='stop-circle'
                          />
                          
                          <ButtonStopNote
                            icon='play-circle'
                          />

                    </View>
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
        backgroundColor: '#E9E9E9',
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
        backgroundColor:'#E9E9E9'
    },

    leftbar:{
      borderLeftWidth:3,
      borderLeftColor:'#5BB1B0',
      width:10,
      height:50,

    },
    viewPlay:{
        backgroundColor:'black',
        marginTop: 40,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        height: 50
    }

})

export default Note;

