import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import {View, StyleSheet,Text} from 'react-native'
import { Icon } from 'react-native-elements';
import {InputSearch} from '../components/SearchBar'
import {firebase} from '../firebase'
const MyProjects = ({navigation}) =>{

    const [user, setUser] = useState({})

    const handleOpenProfile = () =>{
        const user = navigation.getParam('user');
        navigation.navigate('profile', {user})
    }
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Icon style={styles.headerIcons} size={40} name="user" type="font-awesome" onPress={handleOpenProfile}/>
                <Text style={styles.headerTitle}>My Projects</Text>
                <Icon style={styles.headerIcons} size={40}  name="plus" type="font-awesome" onPress={()=>console.log("New Project")}/>
            </View>
            <View style={styles.searchContainer}>
                <InputSearch iconName='search'/>
            </View>
        </View>
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