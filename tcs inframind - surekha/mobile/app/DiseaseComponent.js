import React,{ useState }  from 'react';
import { Image,TouchableOpacity, StyleSheet, Text, View,Button ,TextInput, ViewComponent, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function DiseaseComponent(props) {
    const [s,setS] =useState('')
    return (
        <View  style={styles.dataContainer}>
            <View style={styles.subDataContainer}>
                <Text style={styles.text}>{props.name}</Text>
                
            </View>
            {/* {
                props.value=="Negative"? setS('styles.negative') : setS('styles.positive')
            }  */}
            <View>
                <Text>{props.value}</Text>
            </View>
        </View> 
            
    );
}
const styles = StyleSheet.create({
    
    dataContainer: {
        width:'100%',
        backgroundColor:'white',
        padding:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:2,
        borderBottomColor:'#F2F3F4',
        
    },
    subDataContainer:{
        paddingTop:10,
        
    },
    positive:{
        color:'red',
    },
    negative:{
        color:'green',
    },
    tinyLogo: {
        height:60,
        width:60,

      },
    text:{
        fontWeight:'bold',
        fontSize:15,
        paddingBottom:5,
    },
    logoContainer:{
        height:60,
        width:60,
        backgroundColor:'#A3E4D7',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        marginRight:10,

    },
    
    textValue:{
        fontSize:18,
        fontWeight:'100',

    }
    


  });

export default DiseaseComponent;