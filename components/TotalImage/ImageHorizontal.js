import React from "react";
import styled from "styled-components/native";
import { getImage } from "../../api";
import imageSizeObj from "../obj/imageSizeObj";

const Container = styled.View`
  width: 400px;
  height: 240px;
  border-radius: 15px;
  margin: 5px 0px;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

export default ({ url }) => (
  <Container>
    <BG
      resizeMethod="resize"
      source={{ uri: getImage(url, imageSizeObj._720p1280x720) }}
    />
  </Container>
);
