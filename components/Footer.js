import React from "react";
import { View, Text, Button, ScrollView, ImageBackground } from "react-native";
import gStyles from "./../gStyles";

const Footer = () => {
	return (
		<View style={{ backgroundColor: "gold", flex: 1, paddingBottom: 15 }}>
			<View
				style={{
					backgroundColor: "gold",
					flex: 1,
					flexDirection: "row",
					borderBottomColor: "rgba(0,0,0,.07)",
					borderBottomWidth: 1,
					paddingBottom: 10,
				}}
			>
				<View style={{ width: "50%", alignItems: "center" }}>
					<Text style={{ fontSize: 24, color: "black", marginTop: 10 }}>
						SHARESPACE COWORKING
					</Text>
				</View>
				<View style={{ flex: 1, alignItems: "center" }}>
					<Text style={{ marginTop: 5 }}>1274 W Pacific Ave, Suite #150</Text>
					<Text>Spokane, WA 99205</Text>
					<Text style={{ marginTop: 7 }}>509-555-6129</Text>
				</View>
			</View>
			<View
				style={{
					backgroundColor: "gold",
					flex: 1,
					flexDirection: "row",
					marginTop: 15,
				}}
			>
				<View style={{ flex: 1, alignItems: "center" }}>
					<Text style={{ fontSize: 19 }}>Services</Text>
					<Text style={{ textDecorationLine: "underline" }}>Memberships</Text>
					<Text style={{ textDecorationLine: "underline" }}>Suites</Text>
					<Text style={{ textDecorationLine: "underline" }}>Drop In</Text>
				</View>
				<View style={{ flex: 1, alignItems: "center" }}>
					<Text style={{ fontSize: 19 }}>Who We Are</Text>
					<Text style={{ textDecorationLine: "underline" }}>Community</Text>
					<Text style={{ textDecorationLine: "underline" }}>Contact</Text>
				</View>
			</View>
		</View>
	);
};
export default Footer;
