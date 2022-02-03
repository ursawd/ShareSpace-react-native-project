import { View, Text } from "react-native";
import React from "react";

const Row1 = () => {
	return (
		<View
			style={{
				backgroundColor: "#00b8b8",
			}}
		>
			<Text
				style={{
					color: "white",
					fontSize: 24,
					padding: 15,
					textAlign: "center",
				}}
			>
				WHAT'S INCLUDED
			</Text>

			<View style={{ alignItems: "center", paddingBottom: 20 }}>
				<Text style={{ color: "white" }}>MAIL SERVICES</Text>
				<Text style={{ color: "white" }}>3 PARKING OPTIONS</Text>
				<Text style={{ color: "white" }}>UNLIMITED COFFEE + TEA</Text>
				<Text style={{ color: "white" }}>FULL KITCHEN</Text>
				<Text style={{ color: "white" }}>ACCESS TO LARGE WORKSPACES</Text>
				<Text style={{ color: "white" }}>SUPER FAST WIFI</Text>

				<Text style={{ color: "white" }}>4 BOOKABLE CONFERENCE ROOMS</Text>
				<Text style={{ color: "white" }}>5 BREAKOUT BOOTHS</Text>
				<Text style={{ color: "white" }}>2 PHONE BOOTHS</Text>
				<Text style={{ color: "white" }}>PRINT CENTER</Text>
				<Text style={{ color: "white" }}>KITCHENETTE</Text>
			</View>
		</View>
	);
};

export default Row1;
