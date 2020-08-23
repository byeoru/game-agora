import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import useDetail from "./useDetail";
import { getScreenShot } from "../api";
import imageSizeObj from "./obj/imageSizeObj";

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
const DataContainer = styled.View`
  width: 120px;
  justify-content: space-between;
`;
const Title = styled.Text`
  text-align: center;
`;

export default ({
  title,
  rating,
  criticRating,
  totalRating,
  released,
  platforms,
  backgroundImage,
  styles,
}) => {
  const goToDetail = useDetail({
    title,
    rating,
    criticRating,
    totalRating,
    released,
    platforms,
    backgroundImage,
  });
  return (
    <TouchableOpacity onPress={() => goToDetail()}>
      <Container style={{ ...styles }}>
        <BG
          resizeMethod="resize"
          source={{
            uri: getScreenShot(
              backgroundImage,
              imageSizeObj.screenshotMed569x320
            ),
          }}
        />
        <DataContainer>
          <Title>{title}</Title>
        </DataContainer>
      </Container>
    </TouchableOpacity>
  );
};
