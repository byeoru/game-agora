import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 30px;
`;
const Text = styled.Text`
  font-size: 25px;
  margin-left: 10px;
`;

const ContentsHeader = ({ title, styles, children }) => {
  return (
    <Container>
      <Text style={{ ...styles }}>{title}</Text>
      {children}
    </Container>
  );
};

ContentsHeader.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.object,
  children: PropTypes.node,
};

export default ContentsHeader;
