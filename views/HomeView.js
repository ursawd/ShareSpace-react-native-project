import React from "react";
import { View, Text, Button, ScrollView, ImageBackground } from "react-native";
import Row1 from "./Home/Row1";
import Row2 from "./Home/Row2";
import Row3 from "./Home/Row3";
import Row4 from "./Home/Row4";
import Row5 from "./Home/Row5";
import Footer from "../components/Footer";

export default function HomeView({ navigation }) {
	return (
		<ScrollView>
			<View style={{ flex: 1 }}>
				<Row1 />
				<Row2 navigation={navigation} />
				<Row3 navigation={navigation} />
				<Row4 navigation={navigation} />
				<Row5 />
				<Footer navigation={navigation} />
			</View>
		</ScrollView>
	);
}
