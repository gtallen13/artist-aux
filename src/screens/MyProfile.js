import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {ButtonText} from '../components/ButtonText';
import {ButtonLogin} from '../components/Button';
import { ToggleTextInput} from '../components/TextInputButton'
import {Context as AuthContext} from '../providers/AuthContext';
import {firebase} from '../firebase'
import Prompt from 'react-native-prompt-crossplatform';
import { State } from 'react-native-gesture-handler';
import { useSafeArea } from 'react-native-safe-area-context';


const MyProfilePage = ({navigation}) => {
    
    const {signout, state} = useContext(AuthContext);
    const [username, setUsername] = useState(state.user.username);
    const [email, setEmail] = useState(state.user.email);
    const [emailCredentials, setEmailCredentials] = useState('');
    const [passwordCredentials, setPasswordCredntials] = useState('');
    const [visiblePrompt, setVisiblePrompt] = useState(false);
    const handlerUpdateProfile = (email, username)=>{
        
        //Actualizacion de email
        //https://firebase.google.com/docs/auth/web/manage-users 
        const user = firebase.auth().currentUser
        const credentials =
        user.updateEmail(email)
        .then(()=>{
            console.log('updatedEmail')
            const usersRef = firebase.firestore().collection("users")
            usersRef
            .doc(state.user.id)
            .update({
                "username": username
            })
            .then(()=>{
                console.log('updatedUsername')
            })
            .catch((error)=>{
                console.log(error.message)
            })
        })
        .catch((error)=>{
            console.log(error.message)
        })
    
    }
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Icon style={styles.headerIcons} name="chevron-left" type="font-awesome" onPress={()=>navigation.navigate('projects')}/>
                <Text style={styles.headerTitle}>My Projects</Text>
                    <ButtonText text = 'Logout' fontSize={20} color='#5BB1B0' callback= {()=>{signout()}}/>
            </View>
            <View style={styles.editContainer}>
                <Avatar size="xlarge" source={require('../../assets/pp.png')}/>
                <View style={styles.ChangeImg}>
                    <ButtonText text={"Change Image"}/> 
                </View>
                    <View style={styles.inputText}>
                            {/* Username */}
                        <Text style={styles.titlePlacerHolder}>Username:</Text>
                            <ToggleTextInput 
                            iconName='edit' 
                            value={username}
                            onChangeText={setUsername}
                            />
                        {/* Email */}
                        <Text style={styles.titlePlacerHolder}>Email:</Text>
                            <ToggleTextInput  
                            iconName='edit' 
                            value={email}
                            onChangeText={setEmail}
                            />
                        {/* Change Password */}
                        <Text style={styles.titlePlacerHolder}>Change Password:</Text>
                            <ToggleTextInput callback={()=> navigation.navigate('changePassword')} iconName='edit' value='*******'/>
                    </View>
                <View>
                    <ButtonLogin text={"Save"} callback={()=>setVisiblePrompt(true)}/>
                </View>
                <Prompt
                title="hi"
                inputPlaceholder="dsd"
                isVisible={visiblePrompt}
                onChangeText={setEmailCredentials}
                onCancel={()=>{
                }}
                onSubmit={()=>{

                }}
                />
            </View>
        </ScrollView> 
    )
    
}


    

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ecedeb'
    },
    editContainer:{
        flex:8,
        justifyContent:'center',
        alignItems:'center',
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

export default MyProfilePage;