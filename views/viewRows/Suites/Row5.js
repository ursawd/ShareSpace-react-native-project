import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import gStyles from "../../../gStyles";
import React from "react";

const Row5 = ({ navigation }) => {
	return (
		<ImageBackground
			source={require("../../../assets/images/coworking.jpg")}
			style={{ minHeight: 300 }}
		>
			<View style={styles.view}>
				<Text style={styles.header}>LET'S WORK TOGETHER</Text>

				<Button
					title={"JOIN"}
					containerStyle={{ marginTop: 20 }}
					titleStyle={{ color: "black" }}
					buttonStyle={{ backgroundColor: "gold", padding: 20 }}
					onPress={() => navigation.navigate("Contact")}
				/>
			</View>
		</ImageBackground>
	);
};
const styles = StyleSheet.create({
	header: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 64,
	},
	view: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default Row5;
