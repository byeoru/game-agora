import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import BottomNav from "./BottomNav";
import Detail from "../screens/Detail/index";
import More from "../screens/More/index";

const StackNav = createStackNavigator();

export default () => {
  return (
    <StackNav.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#FFFCFF",
          borderBottomColor: "white",
          shadowColor: "white",
        },
      }}
    >
      <StackNav.Screen name="Stack" component={BottomNav} />
      <StackNav.Screen
        name="More"
        component={More}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      />
      <StackNav.Screen
        name="Detail"
        component={Detail}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </StackNav.Navigator>
  );
};
