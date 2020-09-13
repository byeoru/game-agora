import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  position: absolute;
  top: 40px;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 18px;
  z-index: -1;
  text-align: center;
  padding: 5px 0px;
`;

const ContentsDescription = ({ text, styles }) => (
  <Container>
    <Text style={{ ...styles }}>{text}</Text>
  </Container>
);

ContentsDescription.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.object,
};

export default ContentsDescription;
