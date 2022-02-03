import "react-native-gesture-handler";
//------------------------------------
import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import HomeView from "./views/HomeView";
import MembershipView from "./views/MembershipView";
import SuitesView from "./views/SuitesView";
import DropinView from "./views/DropinView";
import CommunityView from "./views/CommunityView";
import ContactView from "./views/ContactView";
import {
	Ionicons,
	MaterialIcons,
	MaterialCommunityIcons,
	FontAwesome,
} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor: "gold",
						borderBottomColor: "rgba(0,0,0,.1",
						borderBottomWidth: 1,
					},
				}}
			>
				<Drawer.Screen
					name="Home"
					component={HomeView}
					options={{
						drawerIcon: ({ focused, size }) => (
							<Ionicons
								name="md-home"
								size={size}
								color={focused ? "gold" : "teal"}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="Membership"
					component={MembershipView}
					options={{
						drawerIcon: ({ focused, size }) => (
							<Ionicons
								name="person"
								size={size}
								color={focused ? "gold" : "teal"}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="Suites"
					component={SuitesView}
					options={{
						drawerIcon: ({ focused, size }) => (
							<MaterialIcons
								name="meeting-room"
								size={size}
								color={focused ? "gold" : "teal"}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="Dropin"
					component={DropinView}
					options={{
						drawerIcon: ({ focused, size }) => (
							<MaterialCommunityIcons
								name="desk"
								size={size}
								color={focused ? "gold" : "teal"}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="Community"
					component={CommunityView}
					options={{
						drawerIcon: ({ focused, size }) => (
							<FontAwesome
								name="group"
								size={size}
								color={focused ? "gold" : "teal"}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="Contact"
					component={ContactView}
					options={{
						drawerIcon: ({ focused, size }) => (
							<MaterialCommunityIcons
								name="email-send"
								size={size}
								color={focused ? "gold" : "teal"}
							/>
						),
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
