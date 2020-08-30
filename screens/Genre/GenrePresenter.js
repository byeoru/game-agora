import React from "react";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";
import SplashScreen from "../SplashScreen";

const Container = styled.View`
  flex: 1;
`;

export default () => (
  <Container>
    <SplashScreen />
  </Container>
);
