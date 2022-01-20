import { View, Text, ImageBackground } from "react-native";
import React from "react";

const Row1 = () => {
  return (
    <ImageBackground source={require("../../assets/open-office-main.jpeg")} style={{ height: 200 }}>
      <View style={{ flex: 1 }}></View>
    </ImageBackground>
  );
};

export default Row1;
