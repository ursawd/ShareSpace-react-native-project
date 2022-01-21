import React from "react";
import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import Row1 from "./Home/Row1";
import Row2 from "./Home/Row2";
import Row3 from "./Home/Row3";
import Row4 from "./Home/Row4";

export default function HomeView({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
        <View style={{ height: 200, backgroundColor: "red" }}>
          <Text>Home View</Text>
        </View>
      </View>
    </ScrollView>
  );
}
