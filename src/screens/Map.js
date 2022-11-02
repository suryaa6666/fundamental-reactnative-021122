import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";

export default function Map() {
  // Create Dummy Data With Array
  const [data, setData] = useState([]);
  // const data = [
  //   {
  //     nama: "rizal mantap",
  //     alamat: "depok",
  //     status: "menganggur",
  //   },
  //   {
  //     nama: "budi",
  //     alamat: "palembang",
  //     status: "panutan",
  //   },
  //   {
  //     nama: "samsul rijal",
  //     alamat: "jakarta",
  //     status: "mentor idaman panutan disukai wanita",
  //   },
  // ];

  async function getData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(response.data);
    console.log(response);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <StatusBar />
      {data.map((item) => (
        <View>
          <Text>{item.title}</Text>
          <hr color="red" style={{ width: "100%" }} />
        </View>
      ))}
    </View>
  );
}
