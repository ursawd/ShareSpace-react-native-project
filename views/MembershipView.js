import React from "react";
import { View, Text } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function MembershipView({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "lightblue" }}>
      <Text>Membership View</Text>
    </View>
  );
}
