import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import useGameDetail from "./useGameDetail";
import { getImage } from "../api";
import imageSizeObj from "../obj/imageSizeObj";

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

export default ({
  title,
  rating,
  criticRating,
  totalRating,
  firstReleaseD,
  platforms,
  backgroundImage,
  involvedCompanies,
  genres,
  summary,
  storyline,
  screenshots,
  artworks,
  videos,
  websites,
  popularity,
  styles,
}) => {
  const goToDetail = useGameDetail();
  return (
    <TouchableOpacity
      onPress={() =>
        goToDetail({
          title,
          rating,
          criticRating,
          totalRating,
          firstReleaseD,
          platforms,
          backgroundImage,
          involvedCompanies,
          genres,
          summary,
          storyline,
          screenshots,
          artworks,
          videos,
          websites,
          popularity,
        })
      }
    >
      <Container style={{ ...styles }}>
        {backgroundImage ? (
          <BG
            resizeMethod="resize"
            source={{
              uri: getImage(backgroundImage, imageSizeObj.screenshotMed569x320),
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
