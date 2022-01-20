import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

export default function HomeView({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require("../assets/open-office-main.jpeg")} style={{ height: 200 }}>
        <View style={{ flex: 1 }}>
          <Text>Home View</Text>
        </View>
      </ImageBackground>
      <View style={{ flex: 0.4, backgroundColor: "gold" }}>
        <Text>Home View</Text>
      </View>
      <View style={{ flex: 1.2, backgroundColor: "beige" }}>
        <Text>Home View</Text>
      </View>
    </View>
  );
}
