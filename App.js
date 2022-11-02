import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import EmbeddedExpression from "./src/screens/EmbedExpression";

//Import Screen

export default function App() {
  return (
    <View>
      <StatusBar />
      {/* Use Component */}
      <EmbeddedExpression />
    </View>
  );
}
