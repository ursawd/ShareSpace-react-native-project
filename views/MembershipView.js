import React from "react";
import { View, Text } from "react-native";
import Footer from "../components/Footer";

export default function MembershipView({ navigation }) {
	return (
		<View
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					minHeight: 450,
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "lightblue",
				}}
			>
				<Text>Membership View</Text>
			</View>
			<Footer navigation={navigation} />
		</View>
	);
}
