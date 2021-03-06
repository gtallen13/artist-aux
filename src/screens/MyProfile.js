import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Avatar, Input} from 'react-native-elements';
import {ButtonText} from '../components/ButtonText';
import {ButtonLogin} from '../components/Button';
import {ButtonIcon} from '../components/TextImputButton'

const MyProfilePage = () => {
    return(
      <View style={styles.container}>
          <Avatar size="xlarge" rounded source={require('../../assets/pp.jpg')}/>
                <View style={styles.ChangeImg}>
                    <ButtonText text={"Change Image"}/> 
                </View>
                    <View style={styles.inputText}>
                            {/* Username */}
                        <Text style={styles.titlePlacerHolder}>Username:</Text>
                            <ButtonIcon callback={()=> console.log("Press")} iconName='edit' placeholderName='Username'/>
                        {/* Email */}
                        <Text style={styles.titlePlacerHolder}>Email:</Text>
                            <ButtonIcon callback={()=> console.log("Press")} iconName='edit' placeholderName='Email'/>
                        {/* Change Password */}
                        <Text style={styles.titlePlacerHolder}>Change Password:</Text>
                            <ButtonIcon callback={()=> console.log("Press")} iconName='edit' placeholderName='Password'/>
                    </View>
                <View>
                    <ButtonLogin text={"Save"}/>
                </View>
      </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ecedeb'
    },
    ChangeImg:{
        padding: 10
    },
    titlePlacerHolder:{
        color:'#a0a29f',
        fontSize:12,
    },
    inputs:{
        padding: 10
    }

})

export default MyProfilePage;