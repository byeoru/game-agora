import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { getRawgImg } from "../../api";
import rawgImgSizeObj from "../../obj/rawgImgSizeObj";

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
