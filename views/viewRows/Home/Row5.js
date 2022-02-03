import { View, Text } from "react-native";
import { Button, Card } from "react-native-elements";
import React from "react";
import gStyles from "../../../gStyles";

const styles = {
	content: {
		fontSize: 20,
		color: "white",
		alignSelf: "center",
	},
	title: {
		marginTop: 15,
		color: "white",
		fontSize: 32,
	},
	card: {
		backgroundColor: "#00b8b8",
		borderWidth: 0,
	},
	cardtitle: {
		marginTop: 5,
		color: "white",
		fontSize: 20,
	},
};

const Row5 = () => {
	return (
		<View style={{ backgroundColor: "#00b8b8" }}>
			<View style={{ flex: 1, alignItems: "center" }}>
				<Text style={styles.title}>WHAT OUR MEMBERS THINK OF SHARESPACE</Text>
				{/* ---- */}
				<View style={{ width: "100%" }}>
					<Card containerStyle={styles.card}>
						<Text style={styles.content}>
							“I've worked at several different coworking spaces over the
							years... Fellow HITS DIFFERENT. Super friendly staff... clean (and
							quiet) environment... awesome network of people. 10/10 would
							recommend.”
						</Text>
						<Card.Title style={styles.cardtitle}>John Strong</Card.Title>
					</Card>
				</View>
				{/* ---- */}
				<View style={{ width: "100%" }}>
					<Card containerStyle={styles.card}>
						<Text style={styles.content}>
							“Fellow provides such a welcoming space for the independent
							worker, while simultaneously creating space for networking and
							collaboration! We love our Washington Cracker Building, second
							floor neighbors!”
						</Text>
						<Card.Title style={styles.cardtitle}>Melissa Flowers</Card.Title>
					</Card>
				</View>
				{/* ---- */}
				<View style={{ width: "100%" }}>
					<Card containerStyle={styles.card}>
						<Text style={styles.content}>
							“Great coworking spot - convenient location downtown, a warm space
							that has areas for focus, creativity, collaboration and quiet
							work. Whatever you need to get through your work day is here.”
						</Text>
						<Card.Title style={styles.cardtitle}>Jason Sharp</Card.Title>
					</Card>
				</View>
				{/* ---- */}
			</View>
		</View>
	);
};

export default Row5;
