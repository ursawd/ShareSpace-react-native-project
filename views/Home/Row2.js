import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import React from "react";
import gStyles from "../../gStyles";

const Row2 = () => {
	return (
		<View style={{ height: 200, backgroundColor: "gold" }}>
			<View style={{ flex: 1, alignItems: "center" }}>
				<Text style={[gStyles.t2, { color: "black", marginTop: 10 }]}>
					LET'S WORK TOGETHER
				</Text>
				<Text style={{ marginTop: 15, marginHorizontal: 25 }}>
					ShareSpace Coworking is a shared office space designed to foster great
					work and build community. Ideal for solo workers, growing your
					business, or starting a new one.
				</Text>
				<View style={{ marginTop: 15 }}>
					<Button
						buttonStyle={{ backgroundColor: "#00b8b8" }}
						title="SIGN ME UP!"
						onPress={() => alert("Button pressed")}
					/>
				</View>
			</View>
		</View>
	);
};

export default Row2;
