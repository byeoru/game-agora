import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";

const Logo = styled.Image`
  width: 300px;
  height: 300px;
`;

export default () => (
  <ScrollContainer loading={false}>
    <Logo
      resizeMode="contain"
      source={require("../../assets/gameAgoraLogo.png")}
    />
  </ScrollContainer>
);
