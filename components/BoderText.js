import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const View = styled.View`
  margin: 2px;
`;
const Text = styled.Text`
  background-color: rgb(234, 234, 234);
  padding: 2px 6px;
  border-radius: 11px;
`;

const BorderText = ({ text }) => (
  <View>
    <Text>{text}</Text>
  </View>
);

BorderText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BorderText;
