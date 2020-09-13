import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import ParentPlatformsObj from "../obj/pPlatformsImgObj";

const Container = styled.View`
  padding: 1px;
`;
const Icon = styled.Image`
  width: 100%;
  height: 100%;
`;

const PlatformIcon = ({ number }) => (
  <Container>
    <Icon
      resizeMethod="resize"
      resizeMode="cover"
      source={ParentPlatformsObj[number]()}
    />
  </Container>
);

PlatformIcon.propTypes = {
  number: PropTypes.number.isRequired,
};

export default PlatformIcon;
