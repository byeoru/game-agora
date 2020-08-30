import React from "react";
import styled from "styled-components/native";
import { CirclesLoader } from "react-native-indicator";

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: white;
`;
const GameAgoraLogo = styled.Image`
  width: 350px;
  height: 350px;
  position: absolute;
  top: 90px;
`;
const ByeoruStudioLogo = styled.Image`
  width: 180px;
  height: 180px;
  position: absolute;
  bottom: -50px;
`;
const IndicatorContainer = styled.View`
  position: absolute;
  bottom: 150px;
`;

export default () => (
  <Container>
    <GameAgoraLogo
      resizeMethod="resize"
      resizeMode="contain"
      source={require("../assets/gameAgoraLogo.png")}
    />
    <IndicatorContainer>
      <CirclesLoader size={20} color="black" dotRadius={2} />
    </IndicatorContainer>
    <ByeoruStudioLogo source={require("../assets/byeoruStudioLogo.png")} />
  </Container>
);
