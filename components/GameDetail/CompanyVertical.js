import React from "react";
import styled from "styled-components/native";
import { getImage } from "../../api";
import imageSizeObj from "../../obj/imageSizeObj";

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
const TextBox = styled.View`
  width: 100%;
  position: absolute;
  top: 0;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const Text = styled.Text`
  color: white;
  font-size: 12px;
  padding: 3px;
  margin: 2px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 9px;
`;

export default ({
  name,
  developer,
  publisher,
  porting,
  supporting,
  backgroundImage,
}) => (
  <Container>
    <BG
      resizeMode="cover"
      resizeMethod="resize"
      source={{ uri: getImage(backgroundImage, imageSizeObj.logoMed284x160) }}
    />
    <TextBox>
      {developer ? <Text>개발</Text> : null}
      {publisher ? <Text>퍼블리싱</Text> : null}
      {supporting ? <Text>서포팅</Text> : null}
      {porting ? <Text>포팅(이식)</Text> : null}
    </TextBox>
    <NameBox>
      <Name>{name}</Name>
    </NameBox>
  </Container>
);
