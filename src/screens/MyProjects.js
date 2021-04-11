import React, { useContext, useEffect, useState } from 'react';
import {View, StyleSheet,Text,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements';
import {InputSearch} from '../components/searchBar'
import {Context as ProjectContext} from '../providers/ProjectContext'
import {Context as AuthContext} from '../providers/AuthContext'
import Dialog from 'react-native-dialog'
import moment from 'moment'
import ProjectList from '../components/ProjectList'
const MyProjects = ({navigation}) =>{

    const {createProject, getProjects, state:projectState} = useContext(ProjectContext)
    const {state} = useContext(AuthContext)
    const [projectName, setProjectName] = useState('Untitled')
    const [visiblePrompt, setVisiblePrompt] = useState(false)

    useEffect(()=>{
        getProjects(state.user.id)
    },[])   
    const handleOpenProfile = () =>{
        navigation.navigate('profile')
    }
    const handlerCreateProject = (name)=>{
        setProjectName(name)
        const timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');
        createProject(name,state.user.id,timestamp,"","")
        setVisiblePrompt(false)
        navigation.navigate('note')
    }

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Icon style={styles.headerIcons} size={40} name="user" type="font-awesome" onPress={handleOpenProfile}/>
                <Text style={styles.headerTitle}>My Projects</Text>
                <Icon style={styles.headerIcons} size={40}  name="plus" type="font-awesome" onPress={()=>setVisiblePrompt(true)}/>
            </View>
            <Dialog.Container visible={visiblePrompt}>
                <Dialog.Title>Enter the project's name</Dialog.Title>
                <Dialog.Input
                value={projectName}
                onChangeText={setProjectName}
                wrapperStyle={styles.dialogInput}
                />
                <Dialog.Button
                label="Cancel"
                onPress={ () => {setVisiblePrompt(false)}}
                />
                <Dialog.Button
                label="Confirm"
                bold={true}
                onPress={() =>handlerCreateProject(projectName)}
                />
                
            </Dialog.Container>
            <View style={styles.searchContainer}>
                <InputSearch iconName='search'/>
            </View>
            
            <ProjectList projects={projectState.projects} navigation={navigation}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ecedeb',
    },
    searchContainer:{
        marginTop:30,
        justifyContent:'flex-start',
        alignItems:'center',         
    },
    headerContainer:{
        marginTop:40,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    headerIcons:{
        flex:1,
        padding:10,
    },
    headerTitle:{
        flex:1,
        textAlign:'center',
        fontSize:25,
        fontWeight:'600',
    },
    dialogInput:{
        borderBottomColor:"#5bb1b0",
        borderBottomWidth:1,

    }
})

export default MyProjects;