import React from "react";
import { WebView } from "react-native-webview";

export default () => (
  <WebView
    source={{ uri: "https://papago.naver.com/" }}
    javaScriptEnabled={true}
  />
);
