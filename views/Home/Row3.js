import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import React from "react";
import gStyles from "../../gStyles";

const Row3 = () => {
  return (
    <View style={{ height: 200, backgroundColor: "white" }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={[gStyles.t2, { color: "black", marginTop: 10 }]}>MEMBERSHIP TYPES</Text>

        <View style={{ marginTop: 15 }}>
          <Button
            title={"DETAILS"}
            onPress={() => alert("Button pressed")}
            buttonStyle={{
              backgroundColor: "gold",
            }}
            titleStyle={{
              color: "#000",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Row3;
