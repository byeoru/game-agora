import React from "react";
import styled from "styled-components/native";
import { getRawgImg } from "../../api";
import rawgImgSizeObj from "../../obj/rawgImgSizeObj";
import { Dimensions, Animated, Button } from "react-native";
import useMoreGames from "../useMoreGames";
import { getYMDAgoNow } from "../../utils";
import orderingObj from "../../obj/orderingObj";

const { width: WIDTH } = Dimensions.get("window");
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
const Container = styled.View`
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
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

export default ({ id, title, backgroundImage }) => {
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
      <BG source={{ uri: getRawgImg(backgroundImage, rawgImgSizeObj.w640) }} />
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
            onPress={() =>
              goToMoreGames({
                title: `${title} 평점순`,
                dates: getYMDAgoNow(100),
                genres: id,
                ordering: orderingObj._rating,
                page: 1,
                page_size: 18,
              })
            }
            title="평점순"
          />
          <Button
            title="인기순"
            onPress={() =>
              goToMoreGames({
                title: `${title} 인기순`,
                dates: getYMDAgoNow(100),
                genres: id,
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
                title: `${title} 출시일순`,
                dates: getYMDAgoNow(100),
                genres: id,
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
