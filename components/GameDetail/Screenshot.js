import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { getRawgImg } from "../../api";
import rawgImgSizeObj from "../../obj/rawgImgSizeObj";
import { WIDTH } from "../../utils";

const imgWidth = WIDTH * 0.42;
const imgHeight = imgWidth / 1.5;

const Container = styled.View`
  width: ${imgWidth}px;
  height: ${imgHeight}px;
  border-radius: 15px;
  margin-top: 10px;
  background-color: black;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const Screenshots = ({ imageId }) => (
  <Container>
    <BG
      resizeMode="cover"
      resizeMethod="resize"
      source={{ uri: getRawgImg(imageId, rawgImgSizeObj.w420) }}
    />
  </Container>
);

Screenshots.propTypes = {
  imageId: PropTypes.string.isRequired,
};

export default Screenshots;
