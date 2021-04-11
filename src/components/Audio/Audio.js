import React from 'react'
import {Text,StyleSheet,Dimensions} from 'react-native'
import {Card} from 'react-native-elements'
const {height} = Dimensions.get('screen')
const Audio = ({title})=>{
    return (
        <Card containerStyle={styles.container}>
            <Text style={styles.title}>{title.split('/')[1]}</Text>
        </Card>
    )
}
const styles = StyleSheet.create({
    container:{
        height: height*.1,
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
        backgroundColor:"#000",
        borderRadius:10,
    },
    audioContainer:{
        alignItems:'flex-end',
    },
    title:{
        textAlign:'left',
        color:"#fff",
        fontSize:20,   
    },
})

export  {Audio}