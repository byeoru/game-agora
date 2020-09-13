import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import * as WebBrowser from "expo-web-browser";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 70px;
`;
const Text = styled.Text`
  font-size: 16px;
`;
const LinkText = styled.Text`
  font-size: 16px;
  color: orange;
`;

const OriginNotation = ({ styles }) => (
  <Container style={{ ...styles }}>
    <Text>Data based on </Text>
    <TouchableOpacity
      onPress={() => WebBrowser.openBrowserAsync("https://rawg.io")}
    >
      <LinkText>RAWG</LinkText>
    </TouchableOpacity>
  </Container>
);

OriginNotation.propTypes = {
  styles: PropTypes.object,
};

export default OriginNotation;
