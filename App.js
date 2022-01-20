import "react-native-gesture-handler";
//------------------------------------
import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeView from "./views/HomeView";
import MembershipView from "./views/MembershipView";
import SuitesView from "./views/SuitesView";
import DropinView from "./views/DropinView";
import CommunityView from "./views/CommunityView";
import ContactView from "./views/ContactView";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeView} />
        <Drawer.Screen name="Membership" component={MembershipView} />
        <Drawer.Screen name="Suites" component={SuitesView} />
        <Drawer.Screen name="Dropin" component={DropinView} />
        <Drawer.Screen name="Community" component={CommunityView} />
        <Drawer.Screen name="Contact" component={ContactView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
