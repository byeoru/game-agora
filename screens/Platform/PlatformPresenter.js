import React, { useState } from "react";
import styled from "styled-components/native";
import { ButtonGroup } from "react-native-elements";

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
  return (
    <Container>
      <ButtonGroup
        onPress={setSelectedIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        buttonContainerStyle={{ width: "100%", flexWrap: "wrap" }}
        buttonStyle={{ width: 90 }}
      />
    </Container>
  );
};
