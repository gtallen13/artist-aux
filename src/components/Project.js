import React from 'react'
import {Dimensions, StyleSheet,View,Text} from 'react-native'
import moment from 'moment'
import { Card } from 'react-native-elements'
const {width} = Dimensions.get('screen')
const Project = ({title, timestamp})=>{
    return(
        <Card containerStyle={styles.container}>
            <Card.Title style={styles.title}>{title}</Card.Title>
            <Card.Divider/>
            <View>
                <Text style={styles.timestamp}>{`Created: ${timestamp}`}</Text>
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
        justifyContent:"flex-end",
        fontStyle:'italic'
        
    }
})

export default Project