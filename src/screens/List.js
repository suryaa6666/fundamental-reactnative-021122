import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, FlatList, Text } from "react-native";

export default function List() {
  // Make Dummy Data with Array
  const mantap = [
    {
      nama: "rizal mantap",
      alamat: "depok",
      status: "menganggur",
    },
    {
      nama: "budi",
      alamat: "palembang",
      status: "panutan",
    },
    {
      nama: "samsul rijal",
      alamat: "jakarta",
      status: "mentor idaman panutan disukai wanita",
    },
  ];

  // function Card(item) {
  //   console.log("ini itemnya guys", item);
  //   return (

  //   );
  // }

  return (
    <View>
      <StatusBar />
      <FlatList
      data={mantap}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nama}</Text>
            <Text>{item.alamat}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
      />
    </View>
  );
}
