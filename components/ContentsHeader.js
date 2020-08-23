import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 30px;
`;
const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;
const Text = styled.Text`
  font-size: 25px;
  margin-left: 10px;
`;

export default ({ title, styles }) => (
  <Container>
    <Text style={{ ...styles }}>{title}</Text>
  </Container>
);
