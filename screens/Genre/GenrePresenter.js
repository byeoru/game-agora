import React from "react";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";

const Container = styled.View``;

export default () => <WebView source={{ uri: "https://papago.naver.com/" }} />;
