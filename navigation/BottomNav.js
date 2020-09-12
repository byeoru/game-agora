import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Genre from "../screens/Genre";
import Platform from "../screens/Platform";
import Info from "../screens/Info";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "i18n-js";

const BottomNav = createBottomTabNavigator();

const getHeaderName = (route) => {
  return route?.state?.routeNames[route.state.index] || i18n.t("home");
};

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const title = getHeaderName(route);
    navigation.setOptions({ title });
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
            case i18n.t("home"):
              iconName = "gamepad-variant";
              break;
            case i18n.t("genres"):
              iconName = "chess-bishop";
              break;
            case i18n.t("platforms"):
              iconName = "sword-cross";
              break;
            case i18n.t("info"):
              iconName = "settings";
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
      <BottomNav.Screen name={i18n.t("home")} component={Home} />
      <BottomNav.Screen name={i18n.t("genres")} component={Genre} />
      <BottomNav.Screen name={i18n.t("platforms")} component={Platform} />
      <BottomNav.Screen name={i18n.t("info")} component={Info} />
    </BottomNav.Navigator>
  );
};
