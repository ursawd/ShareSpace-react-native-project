import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import React from "react";
import gStyles from "../../../gStyles";

const Row1 = ({ navigation }) => {
	return (
		<View style={{ height: 350, backgroundColor: "gold" }}>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text
					style={[
						gStyles.t3,
						{ color: "black", marginTop: 10, textAlign: "center" },
					]}
				>
					PRIVATE, LOCKABLE SUITES
				</Text>

				<View style={{ marginTop: 15 }}>
					<Button
						buttonStyle={{ backgroundColor: "#00b8b8", marginBottom: 40 }}
						title="INQUIRE"
						onPress={() => navigation.navigate("Contact")}
					/>
				</View>
			</View>
		</View>
	);
};

export default Row1;
