import React, { Component } from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo_container}>
          <TextInput style={styles.text_input} placeholder="e-mail" />
          <TextInput placeholder="password" />
        </View>
        <View style={styles.form_container} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3c6382",
    width: "100%"
  },
  logo_container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  form_container: {},
  logo: {
    width: 150,
    height: 150
  },
  text_input: {
    color: "white",
    margin: 10,
    borderBottomWidth: 1,
    borderColor: "white",
    padding: 5,
    width: 200,
    backgroundColor: "lightgrey"
  }
});
