import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 30px;
`;
const Text = styled.Text`
  font-size: 25px;
  margin-left: 10px;
`;

export default ({ title, styles, children }) => {
  return (
    <Container>
      <Text style={{ ...styles }}>{title}</Text>
      {children}
    </Container>
  );
};
