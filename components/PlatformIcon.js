import React from "react";
import styled from "styled-components/native";
import ParentPlatformsObj from "../obj/pPlatformsImgObj";

const Container = styled.View`
  padding: 1px;
`;
const Icon = styled.Image`
  width: 100%;
  height: 100%;
`;

export default ({ number }) => (
  <Container>
    <Icon
      resizeMethod="resize"
      resizeMode="cover"
      source={ParentPlatformsObj[number]()}
    />
  </Container>
);
