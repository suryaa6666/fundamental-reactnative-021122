import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

//Import Screen
import Event from "./src/screens/Event";

export default function App() {
  return (
    <View>
      <StatusBar />
      <Event />
    </View>
  );
}
