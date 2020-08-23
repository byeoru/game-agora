import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Rating from "../Rating";
import { TouchableOpacity } from "react-native";
import useDetail from "../useDetail";
import { getScreenShot } from "../../api";
import imageSize from "../obj/imageSizeObj";

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
`;
const DataContainer = styled.View`
  width: 100%;
  height: 35%;
  flex-direction: row;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Data = styled.View`
  width: 70%;
  flex: 4;
  padding: 15px;
  justify-content: space-between;
`;
const Title = styled.Text`
  color: white;
  font-size: 19px;
`;
const BottomData = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Released = styled.Text`
  color: white;
  font-size: 14px;
`;
const PlatformContainer = styled.View`
  flex: 3;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
`;
const PlatformBox = styled.View`
  width: 29%;
  height: 25%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 3px;
`;
const Platform = styled.Text`
  padding: 3px;
  font-size: 13px;
  font-weight: bold;
`;

const SwiperContents = ({
  id,
  title,
  rating,
  released,
  platforms,
  backgroundImage,
}) => {
  const goToDetail = useDetail({ id, title, backgroundImage });
  return (
    <TouchableOpacity onPress={() => goToDetail()}>
      <Container>
        <BG
          resizeMode="cover"
          resizeMethod="resize"
          source={{
            uri: getScreenShot(backgroundImage, imageSize._720p1280x720),
          }}
        />
        <DataContainer>
          <Data>
            <Title>{title}</Title>
            <BottomData>
              <Rating rating={rating} styles={{ color: "white" }} />
              <Released>{released} 출시</Released>
            </BottomData>
          </Data>
          <PlatformContainer>
            {platforms.map((platform) => (
              <PlatformBox key={platform.id}>
                <Platform>{platform.abbreviation}</Platform>
              </PlatformBox>
            ))}
          </PlatformContainer>
        </DataContainer>
      </Container>
    </TouchableOpacity>
  );
};

SwiperContents.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default SwiperContents;
