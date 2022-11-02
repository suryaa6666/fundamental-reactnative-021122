import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Image } from "react-native";

export default function Props() {
  // Create variable to insert link Image
  const gambar = "https://cdn.myanimelist.net/images/characters/4/489561.jpg";
  const gambar1 =
    "https://cdn.idntimes.com/content-images/community/2022/09/vlcsnap-2022-09-28-17h47m11s017-56965fbaa68adf470a17cc45ea5d328d-73a6e72b733c2eff11082ba7bfa55484_600x400.png";

  return (
    <View>
      <StatusBar />
      {/* Code Here */}
      <MasukkanGambar gambar={gambar} />
      <MasukkanGambar gambar={gambar1} />
    </View>
  );
}

function MasukkanGambar({ gambar }) {
  console.log("ini data", gambar);
  // destructuring
  return <Image source={gambar} style={{ width: 100, height: 100 }} />;
}
