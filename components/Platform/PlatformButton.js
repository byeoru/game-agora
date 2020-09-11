import React from "react";
import styled from "styled-components/native";
import { getRawgImg } from "../../api";
import rawgImgSizeObj from "../../obj/rawgImgSizeObj";
import { Animated } from "react-native";
import orderingObj from "../../obj/orderingObj";
import useMoreGames from "../useMoreGames";
import { getYMDAgoNow, WIDTH } from "../../utils";

const touchableOpacityWidth = WIDTH / 2.1;

const TouchableOpacity = styled.TouchableOpacity`
  width: ${touchableOpacityWidth}px;
  height: ${touchableOpacityWidth}px;
  margin: 10px 0px;
  border-radius: 15px;
  overflow: hidden;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
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

export default ({ id, title, backgroundImage }) => {
  const goToMoreGames = useMoreGames();
  const buttonBoxinitlocation = touchableOpacityWidth / -1.3;
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
      <BG source={{ uri: getRawgImg(backgroundImage, rawgImgSizeObj.w640) }} />
      <Animated.View
        style={{
          width: "100%",
          height: "100%",
          bottom: value,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: `rgba(255,255,255,0.7)`,
          borderRadius: 15,
        }}
      >
        <Title>{title}</Title>
        <ButtonContainer>
          <Button
            title="평점순"
            onPress={() =>
              goToMoreGames({
                title,
                contentsBoxTitle: "평점순",
                dates: getYMDAgoNow(100),
                platforms: id,
                ordering: orderingObj._rating,
                page: 1,
                page_size: 18,
              })
            }
          />
          <Button
            title="인기순"
            onPress={() =>
              goToMoreGames({
                title,
                contentsBoxTitle: "인기순",
                dates: getYMDAgoNow(100),
                platforms: id,
                ordering: orderingObj._added,
                page: 1,
                page_size: 18,
              })
            }
          />
          <Button
            title="출시일순"
            onPress={() =>
              goToMoreGames({
                title,
                contentsBoxTitle: "출시일순",
                dates: getYMDAgoNow(100),
                platforms: id,
                ordering: orderingObj._released,
                page: 1,
                page_size: 18,
              })
            }
          />
        </ButtonContainer>
      </Animated.View>
    </TouchableOpacity>
  );
};
