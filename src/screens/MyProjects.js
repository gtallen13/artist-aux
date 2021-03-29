import React from 'react';
import {View, StyleSheet,Text,ScrollView} from 'react-native'
import { Icon } from 'react-native-elements';
import {InputSearch} from '../components/searchBar'

const MyProjects = ({navigation}) =>{

    const handleOpenProfile = () =>{
        navigation.navigate('profile')
    }
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Icon style={styles.headerIcons} size={40} name="user" type="font-awesome" onPress={handleOpenProfile}/>
                <Text style={styles.headerTitle}>My Projects</Text>
                <Icon style={styles.headerIcons} size={40}  name="plus" type="font-awesome" onPress={()=>console.log("New Project")}/>
            </View>
            <View style={styles.searchContainer}>
                <InputSearch iconName='search'/>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ecedeb',
    },
    searchContainer:{
        flex:8,
        marginTop:30,
        justifyContent:'flex-start',
        alignItems:'center',         
    },
    headerContainer:{
        flex:1,
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
})

export default MyProjects;