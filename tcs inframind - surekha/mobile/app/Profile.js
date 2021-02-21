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
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={require("./assets/user.png")}
          style={styles.userIcon}
        ></Image>
        <View style={styles.nameDiv}>
          <Text style={styles.name}>Baskaran</Text>
          <Text style={{ color: "#909497" }}>1034</Text>
        </View>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.infoDiv}>
          <Image
            source={require("./assets/phone-call.png")}
            style={styles.icon}
          ></Image>
          <Text style={{ paddingLeft: 10 }}>+91 9952862482</Text>
        </View>
        <View style={styles.infoDiv}>
          <Image
            source={require("./assets/email.png")}
            style={styles.icon}
          ></Image>
          <Text style={{ paddingLeft: 10 }}>baskaran200@gmail.com</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <LinearGradient
          start={[0.5, 0.7]}
          colors={["#1e3c72", "#2a5298"]}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </LinearGradient>
        <LinearGradient
          start={[0.5, 0.7]}
          colors={["#1e3c72", "#2a5298"]}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Generate Report</Text>
        </LinearGradient>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <LinearGradient
            start={[0.5, 0.7]}
            colors={["#1e3c72", "#2a5298"]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    alignItems: "center",

    backgroundColor: "white",
  },
  subContainer: {
    paddingLeft: 40,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  userIcon: {
    height: 80,
    width: 80,
  },
  nameDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1B2631",
  },
  dataContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    paddingLeft: 42,
    paddingTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#F2F3F4",
    paddingBottom: 15,
  },
  icon: {
    height: 18,
    width: 18,
    // color:'grey',
  },
  infoDiv: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
  },
  contentContainer: {
    display: "flex",
    width: "100%",
    padding: 40,
    paddingTop: 20,
    flexDirection: "column",
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
});

export default Profile;
