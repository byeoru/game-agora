import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

export default ({ styles, children }) => (
  <Container style={{ ...styles }}>{children}</Container>
);
