import React, { useContext, useEffect } from 'react'
import {Dimensions, StyleSheet, View, Text,ScrollView} from 'react-native'
import { Image} from 'react-native-elements'
import {Button} from '../components/Button'
import { useTheme } from '@react-navigation/native';
import {  } from 'react-native';

const {width,height} = Dimensions.get('screen');

const StartPage = ({navigation}) =>
{
    const { colors } = useTheme();
  
 
    return (
            <ScrollView contentContainerStyle={[styles.container, {backgroundColor: colors.background}]}>     
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>Artist
                                <Text style={[styles.titleTextSpan, {color: colors.text}]}>Aux</Text>
                            </Text>
                            <Text style={styles.border}></Text>
                            <Text style={[styles.subTitle, {color: colors.text}]}>Record Anywhere</Text>
                        </View>
                        <View style={styles.logoContainer}>
                            <Image 
                            style={styles.logo}
                            source={require('../../assets/logo.png')}/>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title={"Log in"} callback={()=>navigation.navigate('Login')}/>
                            <Button title={"Sign Up"} callback={()=>navigation.navigate('SignUp')}/>
                        </View>
                        <View style={styles.LineBottomPage}/>
         </ScrollView>
       
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#ecedeb',    
    },
    titleText:{
      fontSize:50,  
      fontWeight:'500',
      color:'#5BB1B0',
      textShadowColor:'#585858',
      textShadowOffset:{width: 1, height: 1},
      textShadowRadius:1,
    },
    titleTextSpan:{
        fontWeight:'500',
        marginLeft:5,
        color:'#000'

    },
    border:{
        height:5,
        width:75,
        backgroundColor:'#5BB1B0',
        marginLeft:110,
        
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
    logoContainer:{
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
    },
    LineBottomPage:{
        width:width,
        height:20,
        backgroundColor:'#5bb1b0'
    }
})

export default StartPage;
