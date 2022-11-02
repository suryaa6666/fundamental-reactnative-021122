import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { TextInput } from "react-native-web";

export default function Event() {
  const [terserah, setTerserah] = useState("");

  function handleChangeNama(e) {
    console.log(e);
    setTerserah(e);
  }

  function showTerserah() {
    alert(terserah);
  }

  return (
    <View>
      <StatusBar translucent backgroundColor="blue" />
      {/* Code Here */}
      <TextInput
        style={{ width: "100%" }}
        onChangeText={(e) => handleChangeNama(e)}
      />
      <TouchableHighlight
        onPress={showTerserah}
        style={{ backgroundColor: "red", pading: 20 }}
      >
        <Text>Klik Saya</Text>
      </TouchableHighlight>
    </View>
  );
}
