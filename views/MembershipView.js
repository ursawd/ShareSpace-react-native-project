import React from "react";
import { View, Text, ScrollView } from "react-native";
import Footer from "../components/Footer";
import Row1 from "./viewRows/Membership/Row1";
import Row2 from "./viewRows/Membership/Row2";
import Row3 from "./viewRows/Membership/Row3";
import Row4 from "./viewRows/Membership/Row4";

export default function MembershipView({ navigation }) {
	return (
		<ScrollView>
			<View style={{ flex: 1 }}>
				<Row1 />
				<Row2 />
				<Row3 />
				<Row4 navigation={navigation} />
				<Footer navigation={navigation} />
			</View>
		</ScrollView>
	);
}
