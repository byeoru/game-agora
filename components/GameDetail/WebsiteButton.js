import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import * as WebBrowser from "expo-web-browser";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  padding: 2px 10px;
  justify-content: center;
  align-items: center;
  border-left-width: 2px;
  border-radius: 15px;
  margin: 1px;
  flex-wrap: wrap;
`;
const LinkText = styled.Text`
  font-size: 16px;
  color: chocolate;
`;

const WebsiteButton = ({ url }) => (
  <Container>
    <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(url)}>
      <LinkText>official</LinkText>
    </TouchableOpacity>
  </Container>
);

WebsiteButton.propTypes = {
  url: PropTypes.string.isRequired,
};

export default WebsiteButton;
