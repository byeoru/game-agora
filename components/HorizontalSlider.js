import React from "react";
import { ScrollView } from "react-native";

export default ({ children }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {children}
  </ScrollView>
);
