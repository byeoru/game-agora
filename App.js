import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./navigation/StackNav";
import Constants from "expo-constants";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "react-native-elements";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { ko, en } from "./obj/Localization";

const locale = Localization.locale;

i18n.translations = { ko, en };

// Set the locale once at the beginning of your app.
i18n.locale = locale === "ko-KR" ? locale : "en";

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

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
