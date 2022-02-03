import React from "react";
import { View, Text, ScrollView } from "react-native";
import Footer from "../components/Footer";
import Row1 from "./viewRows/Suites/Row1";
import Row2 from "./viewRows/Suites/Row2";
import Row3 from "./viewRows/Suites/Row3";
import Row5 from "./viewRows/Suites/Row5";
export default function SuitesView({ navigation }) {
	return (
		<ScrollView>
			<View style={{ flex: 1 }}>
				<Row1 navigation={navigation} />
				<Row2 navigation={navigation} />
				<Row3 navigation={navigation} />

				<Row5 navigation={navigation} />

				<Footer navigation={navigation} />
			</View>
		</ScrollView>
	);
}
