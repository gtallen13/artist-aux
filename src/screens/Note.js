import React, { useContext, useEffect, useState } from 'react'
import {View, TextInput,StyleSheet, Text} from 'react-native'
import { ButtonStopNote, HeaderButton} from '../components/Button'
import { ButtonText } from '../components/ButtonText'
import {Icon} from 'react-native-elements';
import { Context as ProjectContext } from "../providers/ProjectContext";
import { useTheme } from '@react-navigation/native';
import {Alert} from '../components/Alert'
import Toast from 'react-native-toast-message';

const Note = ({navigation}) => {
    const {state,getProjects, updateProject, clearMessage } = useContext(ProjectContext); 
    const [note, setNote] = useState("");
    const { colors } = useTheme();
    const [success, setSuccess] = useState('')
    
    useEffect(() => {
        if (state.currentProject.id) {
        setNote(state.currentProject.note);
        }
    }, [state.currentProject]);

    useEffect(() => {
        if (state.currentProject.id) {
        setNote(state.currentProject.note);
        }
    }, [state.currentProject]);

    useEffect(() =>{
        if (state.feedback){
            Toast.show({
                text2:state.feedback
            })
            clearMessage() 
        }
        
    }, [state.feedback]);

    const handleSaveNote = () =>
    {

            updateProject(
                state.currentProject.id, 
                state.currentProject.title,
                state.currentProject.timestamp,
                note,
                setSuccess('Yas')
                
            );  
      
       
    };

    return(        
        <View style={[styles.container, {backgroundColor: colors.background}]}>
            
              <View style={styles.headerContainer}>    
              <Icon 
                color = {colors.text}
                style={styles.headerIcons} 
                name="chevron-left" 
                size={30}  
                type="font-awesome" 
             
                onPress={()=>navigation.navigate('projects')}                 
              /> 
                <Text style={[styles.headerTitle, {color: colors.text}]}>Note</Text>
                <HeaderButton
                        icon="save"
                        type="font-awesome" 
                        size={30}
                        callback={handleSaveNote}/>                      
              </View>      
              <Toast ref={(ref) => Toast.setRef(ref)} />        
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
                    <ButtonText text = 'Recordings' 
                        fontSize={18} 
                        color = 'white' 
                        callback={()=> navigation.navigate('recording')}/>
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
        padding:10,
        paddingBottom:0,
        
    },
    headerIcons:{
        paddingLeft:5,
    },
    headerTitle:{
        flex:1,
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        paddingRight:30,
     
        
    },
    noteContainer: {
        flex: 9,
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
        flex: 1,
        backgroundColor: '#E9E9E9',
        paddingTop:15
    },
     viewPlay:{

        backgroundColor:'black',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        padding:20
    },
    
})

export default Note;

