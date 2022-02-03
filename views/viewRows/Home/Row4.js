import { View, Text, ImageBackground } from "react-native";
import React from "react";
import gStyles from "../../../gStyles";
import { Button } from "react-native-elements";

const Row4 = ({ navigation }) => {
	return (
		<ImageBackground
			source={require("../../../assets/images/coworkingsuites.jpg")}
			style={{ minHeight: 400 }}
		>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text
					style={[
						gStyles.t4,
						{
							color: "gold",
							fontWeight: "bold",
							backgroundColor: "rgba(0,0,0,.3)",
						},
					]}
				>
					SUITES
				</Text>

				<Text
					style={{
						backgroundColor: "rgba(0,0,0,.5)",
						color: "gold",
						fontWeight: "bold",
					}}
				>
					PRIVATE,LOCKABLE, AND PERFECT FOR A SMALL TEAM
				</Text>

				<Button
					title={"AVAILABILTY"}
					containerStyle={{ marginTop: 20 }}
					titleStyle={{ color: "black" }}
					buttonStyle={{ backgroundColor: "gold" }}
					onPress={() => navigation.navigate("Suites")}
				/>
			</View>
		</ImageBackground>
	);
};

export default Row4;
