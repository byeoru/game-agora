import React from "react";
import styled from "styled-components/native";
import { getRawgImg } from "../../api";
import rawgImgSizeObj from "../../obj/rawgImgSizeObj";

const Container = styled.View`
  width: 175px;
  height: 110px;
  border-radius: 15px;
  margin-top: 10px;
  background-color: black;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
const NameBox = styled.View`
  width: 100%;
  height: 30%;
  justify-content: center;
  position: absolute;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
`;
const Name = styled.Text`
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`;

export default ({ name, backgroundImage }) => (
  <Container>
    <BG
      resizeMode="cover"
      resizeMethod="resize"
      source={{ uri: getRawgImg(backgroundImage, rawgImgSizeObj.w420) }}
    />
    <NameBox>
      <Name>{name}</Name>
    </NameBox>
  </Container>
);
