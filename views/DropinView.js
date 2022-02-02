import React from "react";
import { View, Text } from "react-native";
import Footer from "../components/Footer";

export default function DropinView({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Dropin View</Text>
			</View>
			<Footer navigation={navigation} />
		</View>
	);
}
