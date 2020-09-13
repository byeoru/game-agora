import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Rating from "../Rating";
import useGameDetail from "../useGameDetail";
import { getRawgImg } from "../../api";
import rawgImgSizeObj from "../../obj/rawgImgSizeObj";
import PlatformIcon from "../PlatformIcon";
import pPlatformsImgObj from "../../obj/pPlatformsImgObj";
import TemporaryAlternatePlatformTitle from "../TemporaryAlternatePlatformTitle";
import i18n from "i18n-js";

const TouchableOpacity = styled.TouchableOpacity``;
const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
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
  width: 65%;
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
  width: 35%;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
`;
const Platform = styled.View`
  width: 28%;
  height: 28%;
  margin: 3px;
`;

const SwiperContents = ({
  id,
  name,
  rating,
  released,
  parentPlatforms,
  backgroundImage,
}) => {
  const goToDetail = useGameDetail();
  return (
    <TouchableOpacity
      onPress={() => goToDetail({ id, title: name, backgroundImage })}
    >
      <Container>
        {backgroundImage ? (
          <BG
            resizeMethod="resize"
            source={{
              uri: getRawgImg(backgroundImage, rawgImgSizeObj.w640),
            }}
          />
        ) : null}
        <DataContainer>
          <Data>
            <Title>{name}</Title>
            <BottomData>
              <Rating rating={rating} styles={{ color: "white" }} />
              <Released>{`${released} ${i18n.t("released")}`}</Released>
            </BottomData>
          </Data>
          <PlatformContainer>
            {parentPlatforms.map((platform) => (
              <Platform key={platform.platform.id}>
                {pPlatformsImgObj[platform.platform.id] ? (
                  <PlatformIcon number={platform.platform.id} />
                ) : (
                  <TemporaryAlternatePlatformTitle
                    title={platform.platform.name}
                  />
                )}
              </Platform>
            ))}
          </PlatformContainer>
        </DataContainer>
      </Container>
    </TouchableOpacity>
  );
};

SwiperContents.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  released: PropTypes.string,
  parentPlatforms: PropTypes.array,
  backgroundImage: PropTypes.string,
};

export default SwiperContents;
