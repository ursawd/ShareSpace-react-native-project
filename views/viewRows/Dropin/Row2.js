import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import gStyles from "../../../gStyles";
import React from "react";

const Row2 = ({ navigation }) => {
	return (
		<ImageBackground
			source={require("../../../assets/images/permanent-desk.jpg")}
			style={{ minHeight: 300 }}
		>
			<View style={styles.view}>
				<Text style={styles.header}>QUESTIONS?</Text>

				<Button
					title={"EMAIL US"}
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
export default Row2;
