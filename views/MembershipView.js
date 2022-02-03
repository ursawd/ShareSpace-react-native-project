import React from "react";
import { View, Text } from "react-native";
import Footer from "../components/Footer";
import Row1 from "./viewRows/Membership/Row1";

export default function MembershipView({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<Row1 />
			<Footer navigation={navigation} />
		</View>
	);
}
