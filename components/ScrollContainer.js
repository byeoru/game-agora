import React from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";
import SplashScreen from "../screens/SplashScreen";

export default ({ firstLoading, loading, children, contentContainerStyle }) => (
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
    {firstLoading ? (
      <Overlay isVisible={firstLoading ? true : false} fullScreen={true}>
        <SplashScreen />
      </Overlay>
    ) : loading ? (
      <ActivityIndicator color="blue" size="small" />
    ) : (
      children
    )}
  </ScrollView>
);
