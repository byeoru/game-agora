import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 1px;
  background-color: black;
  border-radius: 7px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: white;
  font-size: 9px;
  text-align: center;
`;

const TemporaryAlternatePlatformTitle = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

TemporaryAlternatePlatformTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TemporaryAlternatePlatformTitle;
