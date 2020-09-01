import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import BottomNav from "./BottomNav";
import GameDetail from "../screens/GameDetail";
import More from "../screens/More";
import SubPage from "../screens/GameDetail/SubPage";

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
        name="GameDetail"
        component={GameDetail}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <StackNav.Screen
        name="SubPage"
        component={SubPage}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      />
    </StackNav.Navigator>
  );
};
