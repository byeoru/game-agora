import React, { useRef, useEffect } from "react";
import styled from "styled-components/native";
import BottomSheet from "reanimated-bottom-sheet";
import { Dimensions, TouchableOpacity, Clipboard } from "react-native";
import { getRawgImg } from "../../api";
import { AntDesign } from "@expo/vector-icons";
import CompanyVertical from "../../components/GameDetail/CompanyVertical";
import BorderText from "../../components/BoderText";
import Screenshot from "../../components/GameDetail/Screenshot";
import OriginNotation from "../../components/OriginNotation";
import useSubPage from "../../components/useSubPage";
import VideoHorizontal from "../../components/GameDetail/SubPage/VideoHorizontal";
import Toast from "react-native-toast-message";
import WebsiteButton from "../../components/GameDetail/WebsiteButton";
import RowBox from "../../components/RowBox";
import rawgImgSizeObj from "../../obj/rawgImgSizeObj";
import Rating from "../../components/Rating";
import BarChart from "../../components/GameDetail/BarChart";

export default ({
  navigation,
  loading,
  title,
  backgroundImage,
  rating,
  ratingTop,
  ratings,
  released,
  genres,
  platforms,
  description,
  video,
  screenshots,
  developers,
  publishers,
  website,
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
    margin-bottom: 5px;
  `;
  const DataBox = styled.View`
    margin-top: 30px;
  `;
  const View = styled.View``;
  const Text = styled.Text``;

  const sheetRef = useRef(null);
  const goToSubPage = useSubPage();
  const renderContent = () => (
    <SheetContainer style={{ justifyContent: "flex-start" }}>
      <HeaderContainer>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
      <DataContainer>
        <RowBox>
          <DataBox style={{ flex: 1 }}>
            <DataTitle>출시일</DataTitle>
            <Text>{released}</Text>
          </DataBox>
          <DataBox style={{ flex: 2, marginLeft: 10 }}>
            <DataTitle>장르</DataTitle>
            <RowBox
              styles={{
                flexWrap: "wrap",
              }}
            >
              {genres?.length > 0
                ? genres.map((genre) => (
                    <BorderText key={genre.id} text={genre.name} />
                  ))
                : null}
            </RowBox>
          </DataBox>
        </RowBox>
        <DataBox>
          <DataTitle>플랫폼</DataTitle>
          <RowBox styles={{ flexWrap: "wrap" }}>
            {platforms?.length > 0
              ? platforms.map((platform) => (
                  <BorderText
                    key={platform.platform.id}
                    text={platform.platform.name}
                  />
                ))
              : null}
          </RowBox>
        </DataBox>
        <RowBox>
          <DataBox style={{ flex: 1 }}>
            <DataTitle>평점</DataTitle>
            <Rating rating={rating} />
          </DataBox>
          <DataBox style={{ flex: 2, marginLeft: 10 }}>
            <DataTitle>최고점</DataTitle>
            <Rating rating={ratingTop} />
          </DataBox>
        </RowBox>
        {ratings?.length > 0 ? (
          <DataBox>
            <DataTitle>평가 분포</DataTitle>
            <BarChart ratings={ratings} />
          </DataBox>
        ) : null}
        {description ? (
          <DataBox>
            <RowBox styles={{ justifyContent: "space-between" }}>
              <DataTitle>설명</DataTitle>
              <TouchableOpacity
                onPress={() => {
                  Clipboard.setString(description);
                  Toast.show({
                    position: "bottom",
                    text1: "텍스트를 복사했습니다",
                    text2: "그대로 붙여넣기 하세요",
                  });
                  goToSubPage({
                    title: "번역",
                    classification: "P", // Sub page initial
                    textToInsert: description,
                  });
                }}
              >
                <RowBox styles={{ alignItems: "center" }}>
                  <Text>파파고</Text>
                  <AntDesign
                    name="right"
                    size={17}
                    color="black"
                    style={{ paddingLeft: 10 }}
                  />
                </RowBox>
              </TouchableOpacity>
            </RowBox>
            <Text>{description}</Text>
          </DataBox>
        ) : null}
        {video ? (
          <DataBox>
            <DataTitle>동영상</DataTitle>
            <VideoHorizontal videoId={video} height={200} />
          </DataBox>
        ) : null}
        {screenshots?.length > 0 ? (
          <DataBox>
            <RowBox styles={{ justifyContent: "space-between" }}>
              <DataTitle>스크린샷</DataTitle>
              <TouchableOpacity
                onPress={() =>
                  goToSubPage({
                    title: "스크린샷",
                    classification: "I", // Sub page initial
                    contents: screenshots,
                  })
                }
              >
                <AntDesign
                  name="right"
                  size={17}
                  color="black"
                  style={{ paddingLeft: 10 }}
                />
              </TouchableOpacity>
            </RowBox>
            <RowBox
              styles={{ flexWrap: "wrap", justifyContent: "space-between" }}
            >
              {screenshots.map((screenshot, index) => {
                if (index >= 2) return;
                return (
                  <Screenshot key={screenshot.id} imageId={screenshot.image} />
                );
              })}
            </RowBox>
          </DataBox>
        ) : null}
        {developers?.length > 0 ? (
          <DataBox>
            <DataTitle>개발</DataTitle>
            <RowBox
              styles={{
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {developers.map((company) => (
                <CompanyVertical
                  key={company.id}
                  name={company.name}
                  backgroundImage={
                    company.image_background ? company.image_background : null
                  }
                />
              ))}
            </RowBox>
          </DataBox>
        ) : null}
        {publishers?.length > 0 ? (
          <DataBox>
            <DataTitle>퍼블리셔</DataTitle>
            <RowBox
              styles={{
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {publishers.map((company) => (
                <CompanyVertical
                  key={company.id}
                  name={company.name}
                  backgroundImage={
                    company.image_background ? company.image_background : null
                  }
                />
              ))}
            </RowBox>
          </DataBox>
        ) : null}
        {website ? (
          <DataBox>
            <DataTitle>웹사이트</DataTitle>
            <WebsiteButton url={website} />
          </DataBox>
        ) : null}
        <OriginNotation styles={{ paddingBottom: 20 }} />
      </DataContainer>
    </SheetContainer>
  );
  const onCloseEnd = () => {
    navigation.goBack();
  };
  useEffect(() => {
    if (!loading) {
      sheetRef.current.snapTo(1);
    }
  });
  return (
    <Container>
      <BG
        resizeMethod="resize"
        source={{
          uri: getRawgImg(backgroundImage, rawgImgSizeObj.w640),
        }}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={["0%", "43%", "100%"]}
        borderRadius={20}
        renderContent={renderContent}
        onCloseEnd={onCloseEnd}
        enabledContentTapInteraction={false}
      />
    </Container>
  );
};
