import React from 'react';
import { Dimensions } from 'react-native';
import {View, StyleSheet,Text} from 'react-native'
import {InputSearch} from '../components/SearchBar'
const {height} = Dimensions.get('screen');
const MyProjects = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <InputSearch iconName='search'/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        marginTop: height*0.1,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ecedeb',
    },
    searchContainer:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-end',         
    }
})

export default MyProjects;