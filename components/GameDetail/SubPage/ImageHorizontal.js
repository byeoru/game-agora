import React from "react";
import styled from "styled-components/native";
import { getRawgImg } from "../../../api";
import rawgImgSizeObj from "../../../obj/rawgImgSizeObj";

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

export default ({ imageId }) => (
  <Container>
    <BG
      resizeMethod="resize"
      source={{ uri: getRawgImg(imageId, rawgImgSizeObj.w1280) }}
    />
  </Container>
);
