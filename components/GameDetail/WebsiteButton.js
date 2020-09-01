import React from "react";
import styled from "styled-components/native";
import * as WebBrowser from "expo-web-browser";
import { TouchableOpacity } from "react-native";
import websiteCategory from "../../obj/websiteCategory";

const Container = styled.View`
  padding: 2px 10px;
  justify-content: center;
  align-items: center;
  border-left-width: 2px;
  border-radius: 15px;
  margin: 1px;
`;
const LinkText = styled.Text`
  font-size: 16px;
  color: chocolate;
`;

export default ({ url, category }) => (
  <Container>
    <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(url)}>
      <LinkText>{websiteCategory[category]}</LinkText>
    </TouchableOpacity>
  </Container>
);
