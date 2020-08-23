import React, { useRef, useState } from "react";
import OriginNotation from "../../components/OriginNotation";
import { Dimensions, Text } from "react-native";
import styled from "styled-components/native";
import BottomSheet from "reanimated-bottom-sheet";
import { getScreenShot } from "../../api";
import imageSize from "../../components/obj/imageSizeObj";
import { unixTimeToDate } from "../../utils";
import ProgressRingChart from "../../components/Detail/ProgressRingChart";

export default ({
  navigation,
  title,
  rating,
  criticRating,
  totalRating,
  released,
  platforms,
  backgroundImage,
}) => {
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
    background-color: white;
  `;
  const HeaderContainer = styled.View`
    width: 100%;
    position: absolute;
  `;
  const DataContainer = styled.View`
    margin-top: 50px;
    padding-left: 25px;
    padding-right: 25px;
  `;
  const HeaderTitle = styled.Text`
    padding: 13px;
    font-size: 17px;
    text-align: center;
    font-weight: bold;
  `;
  const DataTitle = styled.Text`
    font-size: 16px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 5px;
  `;
  const DataBox = styled.View``;
  const Text = styled.Text``;

  const sheetRef = useRef(null);
  const renderContent = () => (
    <SheetContainer style={{ justifyContent: "flex-start" }}>
      <HeaderContainer>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
      <DataContainer>
        <DataTitle>최초 출시일</DataTitle>
        <DataBox>
          <Text>{unixTimeToDate(released)}</Text>
        </DataBox>
        <DataTitle>평가: Good 비율</DataTitle>
        <ProgressRingChart
          rating={rating}
          criticRating={criticRating}
          totalRating={totalRating}
        />
        <OriginNotation />
      </DataContainer>
    </SheetContainer>
  );
  const onCloseEnd = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <BG
        resizeMethod="resize"
        source={{
          uri: getScreenShot(backgroundImage, imageSize._720p1280x720),
        }}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={["43%", "100%", 0]}
        borderRadius={20}
        renderContent={renderContent}
        onCloseEnd={onCloseEnd}
      />
    </Container>
  );
};
