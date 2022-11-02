import * as React from "react";

//Import Component Native Base
import {
  Box, Button, FormControl,
  Input, Text
} from "native-base";

export default function FormNativeBase() {
  return (
    <Box>
      <FormControl
        backgroundColor={"brand.700"}
        padding={5}
        w={"100wh"}
        h={"100vh"}
        display="flex"
        justifyContent={"center"}
      >
        <Text fontSize={20} color="white" fontWeight={"bold"} mb={3}>
          Login
        </Text>
        <Input placeholder="masukkan nama..." mb={2} backgroundColor="white" />
        <Input placeholder="masukkan nama..." mb={2} backgroundColor="white" />
        <Button
          variant={"solid"}
          colorScheme="amber"
          onPress={() => {
            alert("berhasil login");
          }}
        >
          Login
        </Button>
      </FormControl>
    </Box>
  );
}
