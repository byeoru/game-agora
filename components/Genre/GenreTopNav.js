import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OrderOfRating from "../../screens/Genre/OrderOfRating";
import OrderOfPopularity from "../../screens/Genre/OrderOfPopularity";
import OrderOfDate from "../../screens/Genre/OrderOfDate";

const GenreTopNav = createMaterialTopTabNavigator();

export default () => (
  <GenreTopNav.Navigator>
    <GenreTopNav.Screen name="평점순" component={OrderOfRating} />
    <GenreTopNav.Screen name="인기순" component={OrderOfPopularity} />
    <GenreTopNav.Screen name="출시일순" component={OrderOfDate} />
  </GenreTopNav.Navigator>
);
