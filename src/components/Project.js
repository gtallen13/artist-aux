import React from 'react'
import { StyleSheet,View,Text} from 'react-native'
import { Card } from 'react-native-elements'
const Project = ({title, timestamp})=>{
    return(
        <Card containerStyle={styles.container}>
            <Card.Title style={styles.title}>{title}</Card.Title>
                <View style={styles.jeje}>
                <Text style={styles.borderProject}></Text>
                </View>
             
            <View style={styles.dateProject}>
                <Text style={styles.timestamp}>{timestamp}</Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        fontSize: 20,
    },
    timestamp:{
        color: "#000",
        flexDirection:'row',
        justifyContent:"flex-end",
        fontStyle:'italic'
        
    },
    dateProject:{
        flexDirection:'row',
    
        marginRight:20,
    },
    borderProject:{
        height:3,
        backgroundColor:'#5BB1B0',
        margin:10,
        marginTop:0,
        opacity:.5,
    }
})

export default Project