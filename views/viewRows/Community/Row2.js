import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Button } from "react-native-elements";

const Row2 = ({ navigation }) => {
	return (
		<View style={{ backgroundColor: "#00b8b8", flex: 1, flexDirection: "row" }}>
			<View style={{ paddingLeft: 20, paddingTop: 40 }}>
				<Image
					style={styles.image}
					source={require("../../../assets/images/person1.jpg")}
				/>
				<Image
					style={styles.image}
					source={require("../../../assets/images/person2.webp")}
				/>
			</View>

			<View style={styles.view}>
				<Text style={styles.content}>
					WE'D LOVE TO HEAR YOUR HOPES AND DREAMS...AND ALSO ABOUT YOUR
					COWORKING NEEDS.
				</Text>
				<View style={{ marginTop: 15 }}>
					<Button
						buttonStyle={{ backgroundColor: "gold" }}
						title="Contact Us"
						titleStyle={{ color: "black" }}
						onPress={() => navigation.navigate("Contact")}
					/>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: "#00b8b8",
		alignItems: "center",
		paddingVertical: 40,
	},
	content: {
		fontSize: 24,
		color: "white",
		textAlign: "center",
		paddingHorizontal: 30,
	},
	image: {
		height: 150,
		width: 150,
	},
});
export default Row2;
