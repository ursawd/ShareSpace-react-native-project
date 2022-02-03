import { View, Text } from "react-native";
import React from "react";

const CircleHeader = ({ options }) => {
	return (
		<View
			style={{
				backgroundColor: options.bgColor,
				height: 150,
				width: 150,
				borderRadius: 75,
				justifyContent: "center",
				alignItems: "center",
				marginVertical: 30,
			}}
		>
			<Text
				style={{
					color: options.bullseyeColor,
					fontSize: options.size,
				}}
			>
				{options.textValue}
			</Text>
		</View>
	);
};

const Row2 = () => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<CircleHeader
				options={{
					bgColor: "gold",
					bullseyeColor: "white",
					textValue: "1",
					size: 100,
				}}
			/>
			<Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 15 }}>
				1 DAY/WEEK
			</Text>
			<Text>$70 per month</Text>
			<Text>This is 15.56 per day!</Text>
			<Text style={{ textAlign: "center", margin: 15 }}>
				Drop by for 1 day / week from 8am - 6pm. This includes access to all of
				our Fellow amenities, and 1 hour of conference room time per week.
			</Text>
			<CircleHeader
				options={{
					bgColor: "#00b8b8",
					bullseyeColor: "white",
					textValue: "2",
					size: 100,
				}}
			/>
			<Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 15 }}>
				2 DAYs/WEEK
			</Text>
			<Text>$130 per month</Text>
			<Text>This is $14.44 per day!</Text>
			<Text style={{ textAlign: "center", margin: 15 }}>
				Drop by for 2 days / week from 8am - 6pm, and get access to all of our
				Fellow amenities; including 2 hours of conference room time per week.
			</Text>

			<CircleHeader
				options={{
					bgColor: "purple",
					bullseyeColor: "white",
					textValue: "24/7",
					size: 60,
				}}
			/>
			<Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 15 }}>
				24/7 CREW
			</Text>
			<Text>$300 per month</Text>
			<Text>This is $9.68 per day!</Text>
			<Text style={{ textAlign: "center", margin: 15 }}>
				24/7 means 24/7, folks. Receive 24/7 access to Fellow’s space and its
				amenities, and book 5 hours of conference room time per week.
			</Text>

			<CircleHeader
				options={{
					bgColor: "black",
					bullseyeColor: "white",
					textValue: "VO",
					size: 60,
				}}
			/>
			<Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 15 }}>
				VIRTUAL OFFICE
			</Text>
			<Text>$50 per month</Text>
			<Text>This is $1.60 per day!</Text>
			<Text style={{ textAlign: "center", margin: 15 }}>
				Let us worry about your mail. Use our address as your business address,
				receive scanned copies of your mail, and store that mail at Fellow for
				pickup at your leisure.
			</Text>

			<CircleHeader
				options={{
					bgColor: "black",
					bullseyeColor: "gold",
					textValue: "VO+",
					size: 60,
				}}
			/>
			<Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 15 }}>
				VIRTUAL OFFICE PLUS
			</Text>
			<Text>$75 per month</Text>
			<Text>This is $2.42 per day!</Text>
			<Text style={{ textAlign: "center", margin: 15 }}>
				Get everything in the virtual office membership, and you visit us once a
				month from 8am - 6pm. Feel free to book a conference room for 1 hour
				while you visit!
			</Text>

			<CircleHeader
				options={{
					bgColor: "lightblue",
					bullseyeColor: "black",
					textValue: "PD",
					size: 60,
				}}
			/>
			<Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 15 }}>
				Permanent Desk
			</Text>
			<Text>$375 per month</Text>
			<Text>This is $12.09 per day!</Text>
			<Text style={{ textAlign: "center", margin: 15 }}>
				Bring your stuff and leave it at your designated desk. Receive 24/7
				access to Fellow and all of its amenities, including 5 hours of
				conference room time per week.
			</Text>
		</View>
	);
};

export default Row2;
