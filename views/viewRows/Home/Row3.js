import { View, Text } from "react-native";
import { Button, Card } from "react-native-elements";
import React from "react";
import gStyles from "../../../gStyles";
import { NavigationContainer } from "@react-navigation/native";

const Row3 = ({ navigation }) => {
	return (
		<View style={{ backgroundColor: "white" }}>
			<View style={{ flex: 1, alignItems: "center" }}>
				<Text style={[gStyles.t2, { color: "black", marginTop: 10 }]}>
					MEMBERSHIP TYPES
				</Text>
				<View style={{ width: "100%" }}>
					<Card>
						<Card.Image
							style={{ height: 300 }}
							source={require("../../../assets/images/dropinc.jpg")}
						/>
						<Card.Title>Drop In</Card.Title>
						<Text style={{ alignSelf: "center" }}>Starting at $25 / day</Text>
					</Card>
				</View>

				<View style={{ width: "100%" }}>
					<Card>
						<Card.Image
							style={{ height: 300 }}
							source={require("../../../assets/images/hotdeskc.jpg")}
						/>
						<Card.Title>Hot Desk</Card.Title>
						<Text style={{ alignSelf: "center" }}>Starting at $9.68 / day</Text>
					</Card>
				</View>

				<View style={{ width: "100%" }}>
					<Card>
						<Card.Image
							style={{ height: 300 }}
							source={require("../../../assets/images/permentdeskc.jpg")}
						/>
						<Card.Title>Permanent Desk</Card.Title>
						<Text style={{ alignSelf: "center" }}>
							Starting at about $12.09 / day
						</Text>
					</Card>
				</View>

				{/* ------------------------------------------- */}
				<View style={{ marginTop: 15, marginBottom: 20 }}>
					<Button
						title={"DETAILS"}
						onPress={() => navigation.navigate("Membership")}
						buttonStyle={{
							backgroundColor: "gold",
						}}
						titleStyle={{
							color: "#000",
						}}
					/>
				</View>
			</View>
		</View>
	);
};

export default Row3;
