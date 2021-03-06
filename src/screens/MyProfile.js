import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Avatar, Input} from 'react-native-elements';
import {ButtonText} from '../components/ButtonText';
import {ButtonLogin, HeaderButton} from '../components/Button';
import {Button} from 'react-native-elements';

const {width, height} = Dimensions.get('screen');
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
              <Input style={styles.inputs} placeholder='CRS tacticalnoob' inputContainerStyle={{borderBottomColor:'#5BB1B0', backgroundColor:'white', borderRadius:8, width:300}} rightIcon={{type: 'font-awesome', name:'edit'}}/>
              {/* Email */}
              <Text style={styles.titlePlacerHolder}>Email:</Text>
              <Input style={styles.inputs} placeholder='gtallen@gmail.com' inputContainerStyle={{borderBottomColor:'#5BB1B0', backgroundColor:'white', borderRadius:8, width:300}} rightIcon={{type: 'font-awesome', name:'edit'}}/>
              {/* Change Password */}
              <Text style={styles.titlePlacerHolder}>Change Password:</Text>
              <Input style={styles.inputs} placeholder='********' inputContainerStyle={{borderBottomColor:'#5BB1B0', backgroundColor:'white', borderRadius:8, width:300}} rightIcon={{type: 'font-awesome', name:'edit'}}/>
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