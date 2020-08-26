import React from "react";
import styled from "styled-components/native";
import AutoHeightWebView from "react-native-autoheight-webview";

const Container = styled.View``;

export default () => (
  <AutoHeightWebView
    source={{ uri: "https://papago.naver.com" }}
    style={{ width: "100%" }}
    onSizeUpdated={(size) => console.log(size.height)}
  />
);
