import React from "react";
// Import 'NativeBaseProvider' component
import { NativeBaseProvider, extendTheme } from "native-base";

// Import font with Expo
import { useFonts } from "expo-font";

// Import Container
import Container from "./Container";

export default function App() {
  const colors = {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  };

  const theme = extendTheme({
    colors,
  });
  
  return (
    // Setup Provider
    <NativeBaseProvider theme={theme}>
      <Container />
    </NativeBaseProvider>
  );
}
