import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import BottomNav from "./BottomNav";
import GameDetail from "../screens/GameDetail/index";
import More from "../screens/More/index";
import SubPage from "../screens/GameDetail/SubPage/index";

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
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
    </StackNav.Navigator>
  );
};
