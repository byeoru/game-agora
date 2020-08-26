import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/index";
import Genre from "../screens/Genre/index";
import Platform from "../screens/Platform/index";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomNav = createBottomTabNavigator();

const getHeaderName = (route) => {
  return route?.state?.routeNames[route.state.index] || "홈";
};

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const title = getHeaderName(route);
    navigation.setOptions({ title, headerShown: title !== "장르" });
  }, [route]);
  return (
    <BottomNav.Navigator
      tabBarOptions={{
        style: {
          position: "absolute",
          shadowColor: "transparent",
          borderColor: "transparent",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          switch (route.name) {
            case "홈":
              iconName = "gamepad-variant";
              break;
            case "장르":
              iconName = "chess-bishop";
              break;
            case "플랫폼":
              iconName = "sword-cross";
              break;
          }
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={focused ? 27 : 23}
              color={focused ? "#E3C4FF" : "#FFE08C"}
            />
          );
        },
      })}
    >
      <BottomNav.Screen name="홈" component={Home} />
      <BottomNav.Screen name="장르" component={Genre} />
      <BottomNav.Screen name="플랫폼" component={Platform} />
    </BottomNav.Navigator>
  );
};
