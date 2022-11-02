import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-web";

export default function State() {
  // Init State
  const [counter, setCounter] = useState(0);

  //Create Function Add
  function Add() {
    setCounter(counter + 1);
  }

  //Create Function Less
  function Less() {
    setCounter(counter - 1);
  }

  return (
    <View>
      <StatusBar />
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          {counter}
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              marginHorizontal: 10,
              padding: 20,
              color: "white",
            }}
            onPress={Add}
          >
            Add
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              marginHorizontal: 10,
              padding: 20,
              color: "white",
            }}
            onPress={Less}
          >
            Less
          </TouchableOpacity>
        </View>
      </View>
      {/* Code Here */}
    </View>
  );
}
