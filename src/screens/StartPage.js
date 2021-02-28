import React from 'react'
import {Dimensions, StyleSheet, View, Text} from 'react-native'
import { Image} from 'react-native-elements'
import Button from '../components/Button'
const {width,height} = Dimensions.get('screen');
const StartPage = () =>
{
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Artist
                    <Text style={styles.titleTextSpan}>Aux</Text>
                </Text>
                <Text style={styles.subTitle}>Record Anywhere</Text>
            </View>
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={{uri:'https://picsum.photos/200/300'}}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title={"Log in"}/>
                <Button title={"Sign Up"}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',    
    },
    titleText:{
      fontSize:50,  
      fontWeight:'500'
    },
    titleTextSpan:{
        fontWeight:'500',
        marginLeft:5,
        textDecorationLine:'underline',
        textDecorationColor:'#5bb1b0',
    },
    subTitle:{
        textAlign:'center',
        fontSize:18,
        fontStyle:'italic',
    },
    titleContainer: {
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    logoContainer:
    {
        justifyContent:'flex-start',
        alignItems:'baseline',
        flex:2,
    },
    logo:{
        borderRadius:15,
        width: width*.6,
        height: height*.25,
    },
    buttonContainer:{
        flex:3,
    }
})

export default StartPage;