import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import React from "react";

const Row1 = ({ navigation }) => {
	return (
		<View style={styles.view}>
			<Text style={styles.title}>DROP IN</Text>
			<Text style={styles.subtitle}>
				Available any weekday from 8am-6pm. Get instant access to conference
				rooms, community areas, breakout booths, and free WiFi.
			</Text>
			<Image
				source={require("../../../assets/images/person2.webp")}
				style={styles.image}
			/>
			<Text style={styles.header}>DAILY DROP IN</Text>
			<Text style={styles.text}>$25.00</Text>
			<Image
				source={require("../../../assets/images/person1.jpg")}
				style={styles.image}
			/>
			<Text style={styles.header}>WEEKLY DROP IN</Text>
			<Text style={styles.text}>$85.00</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	image: {
		width: 300,
		height: 230,
		marginTop: 40,
		marginBottom: 20,
	},
	view: {
		flex: 1,
		alignItems: "center",
		marginBottom: 30,
	},
	header: {
		fontWeight: "bold",
		fontSize: 24,
		alignSelf: "flex-start",
		marginLeft: 45,
	},
	text: {
		marginLeft: 45,
		alignSelf: "flex-start",
	},
	title: {
		fontSize: 64,
		color: "gold",
		marginVertical: 30,
	},
	subtitle: {
		marginHorizontal: 40,
		textAlign: "center",
		fontSize: 18,
	},
});
export default Row1;
