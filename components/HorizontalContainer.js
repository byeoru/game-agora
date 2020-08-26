import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  width: 100%;
  padding: 20px 0px 20px 10px;
  background-color: white;
  border-left-width: 3px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const HorizontalContainer = ({ children }) => <Container>{children}</Container>;

HorizontalContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HorizontalContainer;
