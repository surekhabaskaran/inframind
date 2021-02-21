import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View,Button ,TextInput, ViewComponent, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function DataEntryPage(props) 
{
    return (
        
        <View style={styles.container}>
        
        
            <View>
                <Text style={styles.text}>Body Temperature</Text>
                <TextInput style={styles.input}/>
            
                <Text style={styles.text}>Blood Pressure</Text>
                <TextInput style={styles.input} />
		
		            <Text style={styles.text}>Respiratory Rate</Text>
                <TextInput style={styles.input} />

		            <Text style={styles.text}>Blood Sugar Level</Text>
                <TextInput style={styles.input} />
		
	            	<Text style={styles.text}>Oxygen level</Text>
                <TextInput style={styles.input} />
		
	            	<Text style={styles.text}>Pulse</Text>
                <TextInput style={styles.input} />
		
	            	<Text style={styles.text}>Steps</Text>
                <TextInput style={styles.input} />
              
            </View>
                
   
                <TouchableOpacity onPress={() => props.navigation.navigate('HealthData')}>
                <LinearGradient
                  start={[0.5,0.7]}
                  colors={[ '#1e3c72', '#2a5298']}
                  style={styles.button}
                  >
                  <Text style={styles.buttonText}>Submit</Text>
                </LinearGradient>

                </TouchableOpacity>
            
            </View>  
                
         );
    }         


const styles = StyleSheet.create({
      container: {
      paddingTop:100,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    
    containerTwo:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text:{
        color:'#909497',
        margin: 0,
        fontWeight: 'bold',
    },
    titleText:{
      paddingTop:20,
      fontSize: 13,
      alignItems: 'center',
      justifyContent: 'center',
      color:'#34495E',
    },
    button: {
      alignItems: 'center',
      width: 300,
      height: 45,
      padding: 8,
      justifyContent:'center',
      marginTop:15,
      marginBottom:12,
    },
    buttonText:{
      color:'white',
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    input: {
    
        width: 300,
        fontSize: 15,
        height: 40,
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: '#F8F9F9',
        borderColor: '#D5D8DC',
        borderWidth:1,
        paddingLeft:10,
    },
   
   } );

export default DataEntryPage;