import React from "react";
import { ScrollView, ActivityIndicator } from "react-native";

export default ({ loading, children, contentContainerStyle }) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      flex: loading ? 1 : 0,
      width: "100%",
      justifyContent: loading ? "center" : "flex-start",
      alignItems: "center",
      backgroundColor: "white",
      ...contentContainerStyle,
    }}
  >
    {loading ? <ActivityIndicator color="blue" size="small" /> : children}
  </ScrollView>
);
