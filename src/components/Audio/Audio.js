import React from 'react'
import { View,Text } from 'react-native'
import {StyleSheet} from 'react-native'
import {Card} from 'react-native-elements'
import {Icon} from 'react-native-elements'

const Audio = ({title})=>{
    
    return (
        <Card containerStyle={styles.container}>
            <Card.Title style={styles.title}>{title}</Card.Title>
            <View style={styles.audioContainer}>
            </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000",
        borderRadius:10,
    },
    audioContainer:{
        justifyContent:'center',
        alignItems:'flex-start',
    },
    title:{
        textAlign:'left',
        color:"#fff",
        fontSize:15,   
    },
    icon:{  
        flexDirection:'row',
        justifyContent:"center"
    }
})

export default Audio