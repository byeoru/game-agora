import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  position: absolute;
  right: 0px;
  width: 70%;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 18px;
  z-index: -1;
  text-align: center;
  padding: 10px 0px;
`;

export default ({ text, styles }) => (
  <Container>
    <Text style={{ ...styles }}>{text}</Text>
  </Container>
);
