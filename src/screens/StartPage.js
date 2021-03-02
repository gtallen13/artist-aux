import React from 'react'
import {Dimensions, StyleSheet, View, Text} from 'react-native'
import { Image} from 'react-native-elements'
import {Button,ButtonLogin} from '../components/Button'
const {width,height} = Dimensions.get('screen');
const StartPage = ({navigation}) =>
{
    
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Artist
                    <Text style={styles.titleTextSpan}>Aux</Text>
                    
                </Text>
                <Text style={styles.border}></Text>
                <Text style={styles.subTitle}>Record Anywhere</Text>
            </View>
            <View style={styles.logoContainer}>
                <Image 
                style={styles.logo}
                source={require('../../assets/logo.png')}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title={"Log in"} callback={()=>navigation.navigate('login')}/>
                <Button title={"Sign Up"} callback={()=>console.log('sign up')}/>
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
        
    },
    border:{
        height:5,
        width:70,
        backgroundColor:'#5BB1B0',
        marginLeft:125,
        
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
