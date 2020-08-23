import React from "react";
import styled from "styled-components/native";
import ParentPlatformsObj from "./obj/ParentPlatformsObj";

const Container = styled.View``;
const Icon = styled.Image`
  width: 50px;
  height: 50px;
`;

export default ({ number }) => (
  <Container>
    <Icon source={ParentPlatformsObj[number]()} />
  </Container>
);
