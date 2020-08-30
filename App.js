import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./navigation/StackNav";
import Constants from "expo-constants";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "react-native-elements";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ThemeProvider>
          <NavigationContainer>
            <StackNav />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
