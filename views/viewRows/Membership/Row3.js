import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Row3 = () => {
	return (
		<View style={styles.view}>
			<Text style={styles.header}>STUDENT DISCOUNT</Text>
			<Text style={styles.content}>
				We’d love to help offset your education costs. Let us know, and you’ll
				receive 10% off your membership!
			</Text>
			<Text style={styles.header}>NEW BUSINESS DISCOUNT</Text>
			<Text style={styles.content}>
				If you haven’t worked in ShareSpace before, bring in a copy of your new
				business license, and you’ll receive 10% off your membership (excluding
				suites) for your first year at ShareSpace!
			</Text>
			<Text style={styles.header}>NON-PROFIT DISCOUNT</Text>
			<Text style={styles.content}>
				We want to support the people who support Spokane. 501c3 Nonprofit
				Organizations get 10% off of their memberships at ShareSpace.
			</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: "#00b8b8",
		alignItems: "center",
		padding: 20,
	},
	header: {
		fontSize: 20,
		color: "white",
	},
	content: {
		color: "white",
		padding: 20,
		textAlign: "center",
	},
});
export default Row3;
