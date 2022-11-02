import { Box } from "native-base";
import * as React from "react";

// Import Screen
import Hello from "./src/screens/Hello";
import FormNativeBase from "./src/screens/FormNativeBase";


export default function Container() {
  return (
    <Box>
      <FormNativeBase />
    </Box>
  );
}
