import React from "react";
import styled from "styled-components/native";
import { getImage } from "../../api";
import imageSizeObj from "../obj/imageSizeObj";

const Container = styled.View`
  width: 175px;
  height: 110px;
  border-radius: 15px;
  margin-top: 10px;
  background-color: black;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

export default ({ url }) => (
  <Container>
    <BG
      resizeMode="cover"
      resizeMethod="resize"
      source={{ uri: getImage(url, imageSizeObj.logoMed284x160) }}
    />
  </Container>
);
