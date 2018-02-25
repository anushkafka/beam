import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MyLocation from "./src/components/MyLocation";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyLocation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
