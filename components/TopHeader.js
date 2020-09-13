import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Text = styled.Text`
  font-size: 33px;
  background-color: white;
  position: absolute;
  padding: 7px 12px;
  top: -20px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  font-weight: 600;
`;

const TopHeader = ({ title }) => <Text>{title}</Text>;

TopHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TopHeader;
