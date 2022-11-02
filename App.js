import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

// Import Component

export default function App() {
  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <Text>Hello World 😎</Text>
      <Card />
      <ButtonKeren />
      <ButtonKeren />
      <ButtonKeren />
      <ButtonKeren />
      <ButtonKeren />
      <ButtonKeren />
      <ButtonKeren />
      <Text>aziz ganteng banget disukai banyak wanita</Text>
    </View>
  );
}

function Card() {
  return (
    <View>
      <Text>Halo guys apakabar? 😁</Text>
    </View>
  );
}

function ButtonKeren() {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          alert("attalah ah");
        }}
      >
        <Text>Ini TouchableOpacity</Text>
      </TouchableOpacity>
    </View>
  );
}
