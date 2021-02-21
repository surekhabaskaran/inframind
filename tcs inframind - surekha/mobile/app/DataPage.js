import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import DataComponent from "./DataComponent";
import { LinearGradient } from "expo-linear-gradient";
import DiseaseComponent from "./DiseaseComponent";
import axios from "axios";



class DataPage extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.Scrollcontainer}>
          <View style={styles.flexContainer}>
            <View style={styles.subContainer}>
              <Text style={styles.heading}>Health Report</Text>
            </View>
            <View style={styles.ScrollView}>
              {this.state.healthData.map((i) => {
                return (
                  <DataComponent
                    name={i.name}
                    value={i.value}
                    image={i.images}
                    key={i.key}
                  ></DataComponent>
                );
              })}
            </View>
          </View>
          <View style={styles.flexContainer}>
            <View style={styles.subContainer}>
              <Text style={styles.heading}>Disease</Text>
            </View>
            <View style={styles.ScrollView}>
              {this.state.disease.map((i) => {
                return (
                  <DiseaseComponent
                    name={i.name}
                    value={i.value}>
                    
                    </DiseaseComponent>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3F4",
  },
  Scrollcontainer: {
    flex: 1,
  },
  subContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  flexContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 35,
  },

  ScrollView: {
    width: "92%",
    backgroundColor: "white",
  },
});
export default DataPage;
