import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import useGameDetail from "./useGameDetail";
import { getRawgImg } from "../api";
import rawgImgSizeObj from "../obj/rawgImgSizeObj";

const Container = styled.View`
  margin-right: 20px;
  border-radius: 15px;
  align-items: center;
`;
const BG = styled.Image`
  width: 130px;
  height: 180px;
  border-radius: 15px;
`;
const TitleBox = styled.View`
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0;
  padding: 2px;
  background-color: rgba(255, 255, 255, 0.9);
`;
const Title = styled.Text`
  text-align: center;
  font-weight: 700;
`;

export default ({ id, title, backgroundImage, styles }) => {
  const goToDetail = useGameDetail();
  return (
    <TouchableOpacity
      onPress={() => goToDetail({ id, title, backgroundImage })}
    >
      <Container style={{ ...styles }}>
        {backgroundImage ? (
          <BG
            resizeMethod="resize"
            source={{
              uri: getRawgImg(backgroundImage, rawgImgSizeObj.w640),
            }}
          />
        ) : null}
        <TitleBox>
          <Title>{title}</Title>
        </TitleBox>
      </Container>
    </TouchableOpacity>
  );
};
