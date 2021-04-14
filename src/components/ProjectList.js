import React, { useContext, useState } from 'react';
import {FlatList,StyleSheet,Text, TouchableOpacity,View} from 'react-native'
import {Context as ProjectContext} from '../providers/ProjectContext'
import Project from './Project'
import Dialog from "react-native-dialog";

const ProjecList = ({navigation, projects})=>{
    const {state, setCurrentProject} = useContext(ProjectContext)
    const {deleteProject} = useContext(ProjectContext)
    const [selectedProject, setSelectedProject] = useState()
    const [visiblePrompt, setVisiblePrompt] = useState(false)
    const [projectID, setProjectID] = useState()
    
    const handleSelectProject = (project)=>{
        setCurrentProject(project)
        navigation.navigate('note')
    }
    const showProject = (id)  => {
        setProjectID(id)
        setVisiblePrompt(true)
    }


    const handlerDeleteProject = () => {
        deleteProject(projectID)
        setVisiblePrompt(false)
    }

    const emptyFlatList = (
        <View style={styles.emptyProjects}>
            <Text>You don't have any projects yet...</Text>
        </View>
    )
    return (
        <View style={styles.container}>
            <FlatList
                data={projects}
                emptyFlatList={emptyFlatList}
                renderItem={({item})=>(
                    <>
                        <TouchableOpacity onLongPress={()=>showProject(item.id)} onPress={()=>{handleSelectProject(item)}}>
                            <Project
                            key={item.id}
                            title={item.title}
                            timestamp={item.timestamp}
                            />
                        </TouchableOpacity>
                    </>
                )}
            />
            <Dialog.Container visible={visiblePrompt} onBackdropPress={()=>setVisiblePrompt(false)}>
                <Dialog.Title>Delete Project</Dialog.Title>
                <Dialog.Description>Do you really wanna delete this masterpiece?</Dialog.Description>
                <Dialog.Button 
                label="Cancel" 
                onPress={()=>setVisiblePrompt(false)}/>
                <Dialog.Button 
                label="Delete" 
                color="#97221F"
                bold={true}
                onPress={()=>handlerDeleteProject()}/>
            </Dialog.Container>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    emptyProjects:{
        flex:1,
        justifyContent:"center",
        alignSelf:"center"
    }
})

export default ProjecList