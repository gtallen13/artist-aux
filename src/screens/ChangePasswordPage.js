import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Icon} from 'react-native-elements'
import {ButtonIcon} from '../components/TextInputButton'
import {ButtonLogin} from '../components/Button'


const ChangePasswordPage = () => {
   return(

    <View style={styles.container}>
        <View style={styles.headerContainer}>
                <Icon style={styles.headerIcons} size={40} name="user" type="font-awesome" onPress={()=>navigation.navigate('profile')}/>
                <Text style={styles.headerTitle}>My Projects</Text>
                <Icon style={styles.headerIcons} size={40}  name="plus" type="font-awesome" onPress={()=>console.log('New Project')}/>
        </View>
        <View style={styles.inputsContainer}>
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
    </View>   
   )
   
    

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ecedeb'
     },
     inputsContainer:{
        flex:8,
        justifyContent:'center',
        alignItems:'center',
     },
     inputText:{
        justifyContent:'flex-start',
    },
    email:{
        color:'#a0a29f',
        fontSize:14,   
    },
    password:{
        color:'#a0a29f',
        fontSize:14,
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    headerIcons:{
        flex:1,
        padding:10,
    },
    headerTitle:{
        flex:1,
        textAlign:'center',
        fontSize:25,
        fontWeight:'600',
    },
})

export default ChangePasswordPage;