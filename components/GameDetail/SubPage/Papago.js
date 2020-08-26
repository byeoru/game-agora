import React from "react";
import AutoHeightWebView from "react-native-autoheight-webview";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
`;

export default () => (
  <Container>
    <AutoHeightWebView
      source={{ uri: "https://papago.naver.com" }}
      style={{ width: "100%" }}
    />
  </Container>
);
