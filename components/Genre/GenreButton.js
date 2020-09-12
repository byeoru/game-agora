import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { getRawgImg } from "../../api";
import rawgImgSizeObj from "../../obj/rawgImgSizeObj";
import { Animated } from "react-native";
import useMoreGames from "../useMoreGames";
import { getYMDAgoNow, WIDTH } from "../../utils";
import orderingObj from "../../obj/orderingObj";
import i18n from "i18n-js";

const touchableOpacityHeight = WIDTH / 2;

const TouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  height: ${touchableOpacityHeight}px;
  margin: 10px 0px;
  overflow: hidden;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
`;
const ButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  position: absolute;
  top: 10px;
`;
const Button = styled.Button``;

const GenreButton = ({ id, title, backgroundImage }) => {
  const goToMoreGames = useMoreGames();
  const buttonBoxinitlocation = touchableOpacityHeight / -1.3;
  let up = false;
  const value = new Animated.Value(!up ? buttonBoxinitlocation : 0);
  const moveContainer = () => {
    if (!up) {
      Animated.spring(value, {
        toValue: 0,
        bounciness: 10,
        duration: 500,
        useNativeDriver: false,
      }).start();
      up = true;
    } else {
      Animated.spring(value, {
        toValue: buttonBoxinitlocation,
        bounciness: 10,
        duration: 500,
        useNativeDriver: false,
      }).start();
      up = false;
    }
  };
  return (
    <TouchableOpacity onPress={() => moveContainer()}>
      {backgroundImage ? (
        <BG
          source={{ uri: getRawgImg(backgroundImage, rawgImgSizeObj.w640) }}
        />
      ) : null}
      <Animated.View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: value,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `rgba(255,255,255,0.7)`,
        }}
      >
        <Title>{title}</Title>
        <ButtonContainer>
          <Button
            title={i18n.t("orderByRating")}
            onPress={() =>
              goToMoreGames({
                title,
                contentsBoxTitle: `${i18n.t("orderByRating")}`,
                contentsDescription: `${i18n.t("_100days")}`,
                dates: getYMDAgoNow(100),
                genres: id,
                ordering: orderingObj._rating,
                page: 1,
                page_size: 13,
              })
            }
          />
          <Button
            title={i18n.t("orderByPopularity")}
            onPress={() =>
              goToMoreGames({
                title,
                contentsBoxTitle: `${i18n.t("orderByPopularity")}`,
                contentsDescription: `${i18n.t("_100days")}`,
                dates: getYMDAgoNow(100),
                genres: id,
                ordering: orderingObj._added,
                page: 1,
                page_size: 13,
              })
            }
          />
          <Button
            title={i18n.t("orderByReleaseDate")}
            onPress={() =>
              goToMoreGames({
                title,
                contentsBoxTitle: `${i18n.t("orderByReleaseDate")}`,
                contentsDescription: `${i18n.t("_100days")}`,
                dates: getYMDAgoNow(100),
                genres: id,
                ordering: orderingObj._released,
                page: 1,
                page_size: 13,
              })
            }
          />
        </ButtonContainer>
      </Animated.View>
    </TouchableOpacity>
  );
};

GenreButton.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
};

export default GenreButton;
