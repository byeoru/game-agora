import React, { useRef, useEffect } from "react";
import OriginNotation from "../../components/OriginNotation";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import BottomSheet from "reanimated-bottom-sheet";
import { getImage } from "../../api";
import imageSize from "../../components/obj/imageSizeObj";
import { unixTimeToDate } from "../../utils";
import ProgressRingChart from "../../components/Detail/ProgressRingChart";
import CompanyVertical from "../../components/Detail/CompanyVertical";
import BorderText from "../../components/BoderText";

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
        <DataBox>
          <DataTitle>IGDB 평가: Good 비율</DataTitle>
          <ProgressRingChart
            rating={rating}
            criticRating={criticRating}
            totalRating={totalRating}
          />
        </DataBox>
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
        snapPoints={[0, "43%", "100%"]}
        borderRadius={20}
        renderContent={renderContent}
        onCloseEnd={onCloseEnd}
        enabledContentTapInteraction={false}
      />
    </Container>
  );
};
