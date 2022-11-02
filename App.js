import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

//Import Screen
import List from "./src/screens/List";

export default function App() {
  return (
    <View>
      <StatusBar />
      {/* Use Component */}
      <List />
    </View>
  );
}
