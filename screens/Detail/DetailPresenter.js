import React, { useRef, useState } from "react";
import OriginNotation from "../../components/OriginNotation";
import { Dimensions, Text } from "react-native";
import styled from "styled-components/native";
import BottomSheet from "reanimated-bottom-sheet";
import { getScreenShot } from "../../api";
import imageSize from "../../components/obj/imageSizeObj";

export default ({ navigation, backgroundImage }) => {
  const { height: HEIGHT } = Dimensions.get("window");
  const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
  `;
  const BG = styled.Image`
    width: 90%;
    height: ${HEIGHT / 2.2}px;
    border-radius: 15px;
    margin-top: 20px;
  `;
  const SheetContainer = styled.View`
    width: 100%;
    height: 100%;
    background-color: wheat;
  `;

  const sheetRef = useRef(null);
  const renderContent = () => (
    <SheetContainer style={{ justifyContent: "flex-start" }}>
      <OriginNotation />
    </SheetContainer>
  );
  const onCloseEnd = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <BG
        source={{
          uri: getScreenShot(backgroundImage, imageSize._720p1280x720),
        }}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[350, 770, 0]}
        borderRadius={15}
        renderContent={renderContent}
        onCloseEnd={onCloseEnd}
      />
    </Container>
  );
};
