import React from "react";
import styled from "styled-components/native";
import { getRawgImg } from "../../api";
import rawgImgSizeObj from "../../obj/rawgImgSizeObj";
import useGamesOfCategory from "../useGamesOfCategory";

const TouchableOpacity = styled.TouchableOpacity``;
const Container = styled.View`
  width: 100%;
  height: 200px;
  margin: 10px 0px;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
`;
const DataContainer = styled.View`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
`;
const Data = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export default ({ id, title, backgroundImage }) => {
  const goToGamesOfCategory = useGamesOfCategory();
  return (
    <TouchableOpacity
      onPress={() => goToGamesOfCategory({ id, title, classification: "G" })}
    >
      <Container>
        <BG
          source={{ uri: getRawgImg(backgroundImage, rawgImgSizeObj.w640) }}
        />
        <DataContainer>
          <Data>{title}</Data>
        </DataContainer>
      </Container>
    </TouchableOpacity>
  );
};
