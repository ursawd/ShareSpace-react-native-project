import "react-native-gesture-handler";
//------------------------------------
import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeView from "./views/HomeView";
import MembershipView from "./views/MembershipView";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeView} />
        <Drawer.Screen name="Membership" component={MembershipView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
