import React from 'react'
import {View, TextInput, ScrollView,StyleSheet, Text} from 'react-native'
import { ButtonStopNote } from '../components/Button'
import { ButtonText } from '../components/ButtonText'
import {Icon} from 'react-native-elements'

const Note = ({navigation}) => {
    return(
        
        <View style={styles.container}>
              <View style={styles.headerContainer}>    
              <Icon style={styles.headerIcons} name="chevron-left" type="font-awesome" onPress={()=>navigation.navigate('projects')}/>
                <Text style={styles.headerTitle}>Note</Text>
              </View>
              
              <View style={styles.noteContainer}>
                        <TextInput
                            multiline={true}
                            style={styles.note}
                            placeholder={"Escribe una nota"}
                        /> 
              </View>
              <View style={styles.barButtom}>
                    <View style={styles.viewPlay}>
                    <ButtonText text = 'Recordings' fontSize={12} color = 'white'/>
                        <View style={styles.leftbar}/>
                          <ButtonStopNote
                            icon='play-circle'
                            color='white'
                          />
                          
                          <ButtonStopNote
                            icon='circle'
                            color='red'
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
    headerContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    headerIcons:{
        flex:1,
        paddingLeft:10,
    },
    headerTitle:{
        flex:1,
        textAlign:'center',
        fontSize:25,
        fontWeight:'600',
    },
    noteContainer: {
        flex: 11,
        backgroundColor: '#E9E9E9',
        textAlignVertical: 'top',
        color: 'white',
       
    },
    note:{
        flex: 11,
        padding: 20,
        fontSize: 16,
        fontFamily: "Noto Sans JP",
    },
    barButtom:{
        flex: 2,
        backgroundColor: '#E9E9E9',
    },
     viewPlay:{
        backgroundColor:'black',
        marginTop: 40,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        height: 51
    },
    leftbar:{
      borderLeftWidth:3,
      borderLeftColor:'white',
      width:10,
      height:50,
       
    },
  
})

export default Note;

