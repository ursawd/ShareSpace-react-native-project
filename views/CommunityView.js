import React from "react";
import { View, Text, ScrollView } from "react-native";
import Footer from "../components/Footer";
import Row1 from "./viewRows/Community/Row1";
import Row2 from "./viewRows/Community/Row2";

export default function CommunityView({ navigation }) {
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
