import React from "react";
import { View, Text, ScrollView } from "react-native";
import Footer from "../components/Footer";
import Row1 from "./viewRows/Dropin/Row1";
import Row2 from "./viewRows/Dropin/Row2";

export default function DropinView({ navigation }) {
	return (
		<ScrollView>
			<View style={{ flex: 1 }}>
				<Row1 navigation={navigation} />
				<Row2 navigation={navigation} />
				<Footer navigation={navigation} />
			</View>
		</ScrollView>
	);
}
