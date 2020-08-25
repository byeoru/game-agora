import React, { useRef, useEffect } from "react";
import styled from "styled-components/native";
import BottomSheet from "reanimated-bottom-sheet";
import { Dimensions, TouchableOpacity } from "react-native";
import ProgressRingChart from "../../components/Detail/ProgressRingChart";
import { getImage } from "../../api";
import { unixTimeToDate } from "../../utils";
import { AntDesign } from "@expo/vector-icons";
import imageSize from "../../components/obj/imageSizeObj";
import CompanyVertical from "../../components/Detail/CompanyVertical";
import BorderText from "../../components/BoderText";
import Screenshot from "../../components/Detail/Screenshot";
import OriginNotation from "../../components/OriginNotation";
import useTotalImage from "../../components/useTotalImage";

export default ({
  navigation,
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
  const RowBox = styled.View`
    width: 100%;
    flex-direction: row;
  `;

  const sheetRef = useRef(null);
  const goToTotalImage = useTotalImage();
  const renderContent = () => (
    <SheetContainer style={{ justifyContent: "flex-start" }}>
      <HeaderContainer>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
      <DataContainer>
        <RowBox>
          <DataBox style={{ flex: 1 }}>
            <DataTitle>최초 출시일</DataTitle>
            <Text>{unixTimeToDate(firstReleaseD)}</Text>
          </DataBox>
          <DataBox style={{ flex: 2, marginLeft: 10 }}>
            <DataTitle>장르</DataTitle>
            <RowBox
              style={{
                flexWrap: "wrap",
              }}
            >
              {genres
                ? genres.map((genre) => (
                    <BorderText key={genre.id} text={genre.name} />
                  ))
                : null}
            </RowBox>
          </DataBox>
        </RowBox>
        <DataBox>
          <DataTitle>플랫폼</DataTitle>
          <RowBox style={{ flexWrap: "wrap" }}>
            {platforms
              ? platforms.map((platform) => (
                  <BorderText key={platform.id} text={platform.name} />
                ))
              : null}
          </RowBox>
        </DataBox>
        <DataBox>
          <DataTitle>IGDB 평가: Good 비율</DataTitle>
          <ProgressRingChart
            rating={rating}
            criticRating={criticRating}
            totalRating={totalRating}
          />
        </DataBox>
        {summary ? (
          <DataBox>
            <DataTitle>개요</DataTitle>
            <Text>{summary}</Text>
          </DataBox>
        ) : null}
        {storyline ? (
          <DataBox>
            <DataTitle>스토리 요약</DataTitle>
            <Text>{storyline}</Text>
          </DataBox>
        ) : null}
        {screenshots ? (
          <DataBox>
            <RowBox style={{ justifyContent: "space-between" }}>
              <DataTitle>스크린샷</DataTitle>
              <TouchableOpacity
                onPress={() =>
                  goToTotalImage({ title: "스크린샷", images: screenshots })
                }
              >
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </RowBox>
            <RowBox
              style={{ flexWrap: "wrap", justifyContent: "space-between" }}
            >
              {screenshots.map((screenshot, index) => {
                if (index >= 2) return;
                return (
                  <Screenshot key={screenshot.id} url={screenshot.image_id} />
                );
              })}
            </RowBox>
          </DataBox>
        ) : null}
        {artworks ? (
          <DataBox>
            <RowBox style={{ justifyContent: "space-between" }}>
              <DataTitle>아트워크</DataTitle>
              <TouchableOpacity
                onPress={() =>
                  goToTotalImage({ title: "아트워크", images: artworks })
                }
              >
                <AntDesign name="right" size={17} color="black" />
              </TouchableOpacity>
            </RowBox>
            <RowBox
              style={{ flexWrap: "wrap", justifyContent: "space-between" }}
            >
              {artworks.map((artwork, index) => {
                if (index >= 2) return;
                return <Screenshot key={artwork.id} url={artwork.image_id} />;
              })}
            </RowBox>
          </DataBox>
        ) : null}
        {involvedCompanies ? (
          <DataBox>
            <DataTitle>게임 회사</DataTitle>
            <RowBox
              style={{
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {involvedCompanies.map((company) => (
                <CompanyVertical
                  key={company.id}
                  name={company.company.name}
                  developer={company.developer}
                  publisher={company.publisher}
                  porting={company.porting}
                  supporting={company.supporting}
                  backgroundImage={
                    company.company.logo ? company.company.logo.image_id : null
                  }
                />
              ))}
            </RowBox>
          </DataBox>
        ) : null}
        <OriginNotation />
      </DataContainer>
    </SheetContainer>
  );
  const onCloseEnd = () => {
    navigation.goBack();
  };
  useEffect(() => {
    sheetRef.current.snapTo(1);
  }, []);
  return (
    <Container>
      <BG
        resizeMethod="resize"
        source={{
          uri: getImage(backgroundImage, imageSize._720p1280x720),
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
