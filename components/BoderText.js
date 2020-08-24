import React from "react";
import styled from "styled-components/native";

const View = styled.View`
  margin: 2px;
`;
const Text = styled.Text`
  background-color: rgb(234, 234, 234);
  padding: 2px 6px;
  border-radius: 11px;
`;

export default ({ text }) => (
  <View>
    <Text>{text}</Text>
  </View>
);
