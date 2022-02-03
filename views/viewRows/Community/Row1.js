import { View, Text, ImageBackground } from "react-native";
import React from "react";
import gStyles from "../../../gStyles";
import { Button } from "react-native-elements";

const Row1 = ({ navigation }) => {
	return (
		<ImageBackground
			source={require("../../../assets/images/community.jpg")}
			style={{ minHeight: 400 }}
		>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text
					style={[
						gStyles.t3,
						{
							color: "white",
							fontWeight: "bold",
							textAlign: "center",
						},
					]}
				>
					OUR COMMUNITY IS WHAT MAKES US
				</Text>
			</View>
		</ImageBackground>
	);
};

export default Row1;
