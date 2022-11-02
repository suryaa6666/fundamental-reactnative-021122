import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import styles from "./styles.module.css";

export function Form() {
  return (
    <View>
      <Text className={styles.container}> Hello World 😎</Text>
      <TextInput placeholder="isikan nama..." />
      <TextInput placeholder="isikan status..." />
      <TouchableOpacity>Klik Saya</TouchableOpacity>
    </View>
  );
}

// Create Variable for CSS
const cobaStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  textSaya: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    paddingVertical: 20,
    marginVertical: 10,
    backgroundColor: "grey",
    color: "white",
  },
  buttonKeren: {
    padding: 20,
    borderRadius: 50,
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
