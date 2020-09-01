import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Container = styled.View`
  width: 97%;
  border-radius: 15px;
  margin-top: 30px;
  padding-bottom: 20px;
  background-color: rgba(100, 100, 100, 0.1);
`;
const ContentsContainer = styled.View``;

const ContentsBox = ({ styles, children }) => (
  <Container style={{ ...styles }}>
    <ContentsContainer>{children}</ContentsContainer>
  </Container>
);

ContentsBox.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default ContentsBox;
