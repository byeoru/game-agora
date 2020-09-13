import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

const RowBox = ({ styles, children }) => (
  <Container style={{ ...styles }}>{children}</Container>
);

RowBox.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.node,
};

export default RowBox;
