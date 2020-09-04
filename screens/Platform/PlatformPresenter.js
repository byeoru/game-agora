import React, { useState } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export default () => {
  const buttons = [
    "Hello",
    "World",
    "Buttons",
    "Byeoru",
    "Studio",
    "GameAgora",
  ];
  const [selectedIndex, setSelectedIndex] = useState();
  return <Container></Container>;
};
