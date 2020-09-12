import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  position: absolute;
  top: 40px;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 18px;
  z-index: -1;
  text-align: center;
  padding: 5px 0px;
`;

export default ({ text, styles }) => (
  <Container>
    <Text style={{ ...styles }}>{text}</Text>
  </Container>
);
