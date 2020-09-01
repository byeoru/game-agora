import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const ThemeTopNav = createMaterialTopTabNavigator();

export default () => (
  <ThemeTopNav.Navigator>
    <ThemeTopNav.Screen name="Home" component={HomeScreen} />
    <ThemeTopNav.Screen name="Settings" component={SettingsScreen} />
  </ThemeTopNav.Navigator>
);
