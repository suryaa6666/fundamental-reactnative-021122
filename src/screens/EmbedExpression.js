import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-web";

export default function EmbedExpression() {
  // Create Function Here
  function HayoApa({ nama }) {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            alert("halo nama saya " + nama);
          }}
        >
          Coba klik aku dong
        </TouchableOpacity>
      </View>
    );
  }

  // Create a variable Here
  const alamat = "DEPOK, CITRALAKE YE";

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <HayoApa nama="surya" />
      <Text>Halo Guys</Text>
      <Text>{alamat}</Text>
    </View>
  );
}
