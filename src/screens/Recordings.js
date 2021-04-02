import React from 'react'
import {View, TextInput, ScrollView,StyleSheet, Text} from 'react-native'
import {Icon} from 'react-native-elements'
import { ButtonStopNote } from '../components/Button'
import { ButtonText } from '../components/ButtonText'

const Recordings = ({navigation}) =>{
    
    const recording = navigation.getParam('recording')
    return(
        <View style={styles.container}>
              <View style={styles.headerContainer}>    
                    <Icon style={styles.headerIcons} 
                            name="chevron-left" 
                            type="font-awesome" 
                            onPress={()=>navigation.navigate('projects')}
                    />
                    <Text style={styles.headerTitle}>Recordings</Text>
              </View>
              
              <View style={styles.recording}>
                    <ScrollView>

                    </ScrollView>
              </View>
              
              <View style={styles.buttomRecorging}>
                    <View style={styles.barSong}>
                        
                    </View>
                    <View style={styles.buttomBar}>
                        <ButtonStopNote
                            icon='step-backward'
                            color='white'
                        />

                        <ButtonStopNote
                            icon='retweet'
                            color='white'
                        
                        />

                        <ButtonStopNote
                            icon='play-circle'
                            color='white'
                            
                        />

                        <ButtonStopNote
                           icon='circle'
                           color='red'
                        />

                        <ButtonStopNote 
                            icon='step-forward'
                            color='white'
                            
                        />
                  <Text style={styles.textButton}>Notes</Text>

                    </View>
              </View>
               
        </View>  
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    headerIcons:{
        flex:1,
        paddingLeft:5,
    },
    headerTitle:{
        flex:1,
        textAlign:'center',
        fontSize:25,
        fontWeight:'600',
        paddingRight:30,
    },
    recording: {
        flex: 9,
        backgroundColor: '#E9E9E9',
        textAlignVertical: 'top',
        color: 'white',
       
    },
  
    buttomRecorging:{
        flex: 4,
        backgroundColor: 'black',
      
    },
    barSong:{
        flex:3,
    },

    buttomBar:{
        flex:2,
        flexDirection:'row',
        justifyContent: 'center',
  
        
        borderColor:'#5bb1b0',
        padding: 5,
        
    },

    textButton:{
     
        color:'white',
        textAlign:'right',
              
    },
   
   
})
export default Recordings