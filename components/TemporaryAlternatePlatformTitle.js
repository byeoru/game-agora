import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 1px;
  background-color: black;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: white;
  font-size: 9px;
  text-align: center;
`;

export default ({ title }) => {
  console.log(title);
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};
