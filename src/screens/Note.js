import React, { useContext, useEffect, useState } from 'react'
import {View, TextInput,StyleSheet, Text} from 'react-native'
import { ButtonStopNote, HeaderButton} from '../components/Button'
import { ButtonText } from '../components/ButtonText'
import {Icon} from 'react-native-elements';
import { Context as ProjectContext } from "../providers/ProjectContext";

const Note = ({navigation}) => {
    const {state,getProjects, updateProject } = useContext(ProjectContext); 
    const [note, setNote] = useState("");
    
    useEffect(() => {
        if (state.currentProject.id) {
        setNote(state.currentProject.note);
        }
    }, [state.currentProject]);

    const handleSaveNote = () =>
    {
        updateProject(
            state.currentProject.id, 
            state.currentProject.title,
            state.currentProject.timestamp,
            note
        );  
    };
    return(
        
        <View style={styles.container}>
              <View style={styles.headerContainer}>    
              <Icon style={styles.headerIcons} 
              name="chevron-left" 
              type="font-awesome"  
              onPress={()=>navigation.navigate('projects')}/> 

                <Text style={styles.headerTitle}>Note</Text>
                <HeaderButton
                        icon="save"
                        type="font-awesome"
                        callback={handleSaveNote}/>
                      
              </View>
              
              <View style={styles.noteContainer}>
                    <TextInput
                    multiline={true}
                    textAlignVertical="top"
                    style={styles.note}
                    placeholder={"Escribe una nota"}
                    value={note}
                    onChangeText={setNote}
                    /> 
              </View>
              <View style={styles.barButtom}>
                    <View style={styles.viewPlay}>
                    <ButtonText text = 'Recordings' fontSize={12} color = 'white' callback={()=> navigation.navigate('recording')}/>
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
        alignItems:'center',
    },
    headerIcons:{
        flex:1,
        paddingLeft:5,
    },
    headerTitle:{
        flex:1,
        textAlign:'center',
        fontSize:25,
        fontWeight:'600',
        paddingRight:30,
    },
    noteContainer: {
        flex: 11,
        backgroundColor: '#E9E9E9',
        textAlignVertical: 'top',
        color: 'white',
       
    },
    note:{
        height:400,
        padding: 20,
        fontSize: 16,
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

