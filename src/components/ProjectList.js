import React, { useContext } from 'react';
import {FlatList,StyleSheet,Text, TouchableOpacity,View} from 'react-native'
import {Context as ProjectContext} from '../providers/ProjectContext'
import Project from './Project'

const ProjecList = ({navigation, projects})=>{
    const {state, setCurrentProject} = useContext(ProjectContext)
     
    const handleSelectProject = (project)=>{
        setCurrentProject(project)
        navigation.navigate('note')
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
                        <TouchableOpacity onPress={()=>{handleSelectProject(item)}}>
                            <Project
                            key={item.id}
                            title={item.title}
                            timestamp={item.timestamp}
                            />
                        </TouchableOpacity>
                    </>
                )}
            />
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