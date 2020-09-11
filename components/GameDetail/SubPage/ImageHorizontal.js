import React from "react";
import styled from "styled-components/native";
import { getRawgImg } from "../../../api";
import rawgImgSizeObj from "../../../obj/rawgImgSizeObj";
import { WIDTH } from "../../../utils";

const imageWidth = WIDTH / 1.02;

const Container = styled.View`
  width: ${imageWidth}px;
  height: ${imageWidth / 1.7}px;
  border-radius: 15px;
  margin: 3px 0px;
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
