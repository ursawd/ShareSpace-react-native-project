import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import React from "react";

const Row2 = ({ navigation }) => {
	return (
		<View style={styles.view}>
			<Image
				source={require("../../../assets/images/suite1.jpg")}
				style={styles.image}
			/>
			<Text style={styles.header}>SUITE 1</Text>
			<Text style={styles.text}>149 sq. ft. - Not Available At This Time</Text>
			<Image
				source={require("../../../assets/images/suite2.jpg")}
				style={styles.image}
			/>
			<Text style={styles.header}>SUITE 2</Text>
			<Text style={styles.text}>170 sq. ft. - Not Available At This Time</Text>
			<Image
				source={require("../../../assets/images/suite3.jpg")}
				style={styles.image}
			/>
			<Text style={styles.header}>SUITE 3</Text>
			<Text style={styles.text}>160 sq. ft. - Not Available At This Time</Text>
			<Text
				style={{
					marginTop: 40,
					fontSize: 32,
					textAlign: "center",
					marginHorizontal: 20,
				}}
			>
				IS YOUR FAVORITE SUITE TAKEN?
			</Text>
			<Button
				buttonStyle={{
					backgroundColor: "gold",
					marginVertical: 40,
				}}
				title="GET ON THE WAITLIST"
				onPress={() => navigation.navigate("Contact")}
				titleStyle={{ color: "black" }}
			/>
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
});
export default Row2;
