import React from "react";
import { View, Text } from "react-native";
import Footer from "../components/Footer";
export default function SuitesView({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text>Suites View</Text>
			</View>
			<Footer navigation={navigation} />
		</View>
	);
}
