import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ViewComponent,
  ImageBackground,
  SafeAreaView,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function LoginPage(props) {
  return (
    <View style={styles.container}>
      <Image source = {require('./logo.png')} style={styles.pic}/>
      <View>
        <Text style={styles.text}>Email</Text>
        <TextInput  style={styles.input} />

        <Text style={styles.text} secureTextEntry={true}>
          Password
        </Text>
        <TextInput secureTextEntry={true} style={styles.input} />
        <TouchableOpacity onPress={() => props.navigation.navigate("app")}>
          <LinearGradient
            start={[0.5, 0.7]}
            colors={["#1e3c72", "#2a5298"]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "center",
        }}
      >
        <View>
          <Text style={styles.titleText}>Don't have an account?</Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("signup")}>
          <Text style={styles.signin}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  pic:{
    height:120,
    width:100,
    marginBottom:70,
    marginTop:50,
  },
  containerTwo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#909497",
    margin: 0,
    fontWeight: "bold",
  },
  titleText: {
    paddingTop: 20,
    fontSize: 13,
    alignItems: "center",
    justifyContent: "center",
    color: "#34495E",
  },
  button: {
    alignItems: "center",
    width: 300,
    height: 45,
    padding: 8,
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    //   width: 300,
    //   fontSize: 15,
    //   padding:0,
    //   height: 30,
    //   marginBottom: 15,
    //   backgroundColor: 'white',
    //   borderBottomColor:'#BDC3C7',
    //   borderBottomWidth:2,
    width: 300,
    fontSize: 15,
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: "#F8F9F9",
    borderColor: "#D5D8DC",
    borderWidth: 1,
    paddingLeft: 10,
  },
  inputTwo: {
    width: 145,
    fontSize: 15,
    padding: 8,
    height: 45,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#F8F9F9",
    borderColor: "#D5D8DC",
    borderWidth: 1,
    marginRight: 10,
  },
  signin: {
    fontWeight: "bold",
  },
});

export default LoginPage;
