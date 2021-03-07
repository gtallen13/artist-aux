import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Icon} from 'react-native-elements'
import {ButtonIcon} from '../components/TextInputButton'
import {ButtonLogin} from '../components/Button'


const ChangePasswordPage = ({navigation}) => {
   return(

    <View style={styles.container}>
        <View style={styles.inputText}> 
            <Text style={styles.email}>Old Password</Text>
                <ButtonIcon callback={()=> console.log("Press")} iconName='edit' placeholderName='Password'/>
        
            <Text style={styles.password}>New Password</Text>
                <ButtonIcon callback={()=> console.log("Press")} iconName='edit' placeholderName='Password'/>
            
            <Text style={styles.password}>Confirm New Password</Text>
                <ButtonIcon callback={()=> console.log("Press")} iconName='edit' placeholderName='Password'/>
        </View>
        <View>
            <ButtonLogin text={"Change password"}/>
        </View>
    </View>   
   )
   
    

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ecedeb'
     },
     inputText:{
        marginTop:35,
    },
    email:{
        color:'#a0a29f',
        fontSize:14,   
    },
    password:{
        color:'#a0a29f',
        fontSize:14,
    },
})

export default ChangePasswordPage;