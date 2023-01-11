import React, { Component } from "react";
import Constants from "expo-constants";
import { Image, VStack, Center, NativeBaseProvider } from "native-base";

export default class Front extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Stack");
    }, 5000);
  }
  
  render() {
    return (
      <NativeBaseProvider bg="#00000">
        <VStack
          bg="#2f4f4f"
          flex="1"
          justifyContent={"center"}
          alignItems={"center"}
          style={{
            marginTop: Constants.statusBarHeight,
          }}
        >
          <Center>
            <Image source={require("../assets/logo.png")} alt="Judul Logo" />
          </Center>
          <Image />
        </VStack>
      </NativeBaseProvider>
    );
  }
} 