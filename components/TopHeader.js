import React from "react";
import styled from "styled-components/native";

const Text = styled.Text`
  font-size: 35px;
  background-color: white;
  position: absolute;
  padding: 7px 12px;
  top: -20px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  font-weight: 600;
`;

export default ({ title }) => <Text>{title}</Text>;
