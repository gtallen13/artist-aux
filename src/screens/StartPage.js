import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Text} from 'react-native-elements'

const StartPage = () =>
{
    return (
        <View style={styles.container}>
            <Text>Artist</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',    
    }
})

export default StartPage;