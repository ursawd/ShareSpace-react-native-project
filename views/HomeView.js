import React from "react";
import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import Row1 from "./Home/Row1";
import Row2 from "./Home/Row2";

export default function HomeView({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Row1 />
        <Row2 />
        <View style={{ height: 200, backgroundColor: "beige" }}>
          <Text>Home View</Text>
        </View>
        <View style={{ height: 200, backgroundColor: "blue" }}>
          <Text>Home View</Text>
        </View>
        <View style={{ height: 200, backgroundColor: "red" }}>
          <Text>Home View</Text>
        </View>
      </View>
    </ScrollView>
  );
}
