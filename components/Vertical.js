import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import useGameDetail from "./useGameDetail";
import { getRawgImg } from "../api";
import rawgImgSizeObj from "../obj/rawgImgSizeObj";
import { trimText } from "../utils";

const TouchableOpacity = styled.TouchableOpacity`
  width: 130px;
  height: 180px;
  margin-right: 20px;
  border-radius: 15px;
  background-color: black;
`;
const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 15px;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;
const TitleBox = styled.View`
  width: 100%;
  height: 35%;
  position: absolute;
  bottom: 0;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
`;
const Title = styled.Text`
  text-align: center;
  font-weight: 700;
`;

const Vertical = ({ id, title, backgroundImage, styles }) => {
  const goToDetail = useGameDetail();
  return (
    <TouchableOpacity
      style={{ ...styles }}
      onPress={() => goToDetail({ id, title, backgroundImage })}
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
        <TitleBox>
          <Title>{trimText(title, 40)}</Title>
        </TitleBox>
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  styles: PropTypes.object,
};

export default Vertical;
