import React from "react";
import { View, Text, ScrollView } from "react-native";
import Footer from "../components/Footer";
import Row1 from "./viewRows/Membership/Row1";
import Row2 from "./viewRows/Membership/Row2";

export default function MembershipView({ navigation }) {
	return (
		<ScrollView>
			<View style={{ flex: 1 }}>
				<Row1 />
				<Row2 />
				<Footer navigation={navigation} />
			</View>
		</ScrollView>
	);
}
