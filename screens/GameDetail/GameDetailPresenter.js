import React, { useRef, useEffect } from "react";
import styled from "styled-components/native";
import BottomSheet from "reanimated-bottom-sheet";
import { Dimensions, TouchableOpacity, Clipboard } from "react-native";
import ProgressRingChart from "../../components/GameDetail/ProgressRingChart";
import { getImage } from "../../api";
import { unixTimeToDate, LoweringFThiDecPlace } from "../../utils";
import { AntDesign } from "@expo/vector-icons";
import imageSize from "../../obj/imageSizeObj";
import CompanyVertical from "../../components/GameDetail/CompanyVertical";
import BorderText from "../../components/BoderText";
import Screenshot from "../../components/GameDetail/Screenshot";
import OriginNotation from "../../components/OriginNotation";
import useSubPage from "../../components/useSubPage";
import VideoHorizontal from "../../components/GameDetail/SubPage/VideoHorizontal";
import Toast from "react-native-toast-message";
import WebsiteButton from "../../components/GameDetail/WebsiteButton";
import RowBox from "../../components/RowBox";

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
  videos,
  websites,
  popularity,
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
          <DataBox styles={{ flex: 1 }}>
            <DataTitle>최초 출시일</DataTitle>
            <Text>{unixTimeToDate(firstReleaseD)}</Text>
          </DataBox>
          <DataBox style={{ flex: 2, marginLeft: 10 }}>
            <DataTitle>장르</DataTitle>
            <RowBox
              styles={{
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
          <RowBox styles={{ flexWrap: "wrap" }}>
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
        {popularity ? (
          <DataBox>
            <DataTitle>인기도</DataTitle>
            <Text>{LoweringFThiDecPlace(popularity)}</Text>
          </DataBox>
        ) : null}
        {summary ? (
          <DataBox>
            <RowBox styles={{ justifyContent: "space-between" }}>
              <DataTitle>개요</DataTitle>
              <TouchableOpacity
                onPress={() => {
                  Clipboard.setString(summary);
                  Toast.show({
                    position: "bottom",
                    text1: "텍스트를 복사했습니다",
                    text2: "그대로 붙여넣기를 하세요",
                  });
                  goToSubPage({
                    title: "번역",
                    classification: "P", // Sub page initial
                    contents: screenshots,
                    textToInsert: summary,
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
            <Text>{summary}</Text>
          </DataBox>
        ) : null}
        {storyline ? (
          <DataBox>
            <RowBox styles={{ justifyContent: "space-between" }}>
              <DataTitle>스토리 요약</DataTitle>
              <TouchableOpacity
                onPress={() => {
                  Clipboard.setString(storyline);
                  Toast.show({
                    position: "bottom",
                    text1: "텍스트를 복사했습니다",
                    text2: "그대로 붙여넣기를 하세요",
                  });
                  goToSubPage({
                    title: "번역",
                    classification: "P", // Sub page initial
                    contents: screenshots,
                    textToInsert: storyline,
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
            <Text>{storyline}</Text>
          </DataBox>
        ) : null}
        {videos ? (
          <DataBox>
            <RowBox styles={{ justifyContent: "space-between" }}>
              <DataTitle>동영상</DataTitle>
              <TouchableOpacity
                onPress={() =>
                  goToSubPage({
                    title: "동영상",
                    classification: "V", // Sub page initial
                    contents: videos,
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
            <VideoHorizontal videoId={videos[0].video_id} height={200} />
          </DataBox>
        ) : null}
        {screenshots ? (
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
                  <Screenshot
                    key={screenshot.id}
                    imageId={screenshot.image_id}
                  />
                );
              })}
            </RowBox>
          </DataBox>
        ) : null}
        {artworks ? (
          <DataBox>
            <RowBox styles={{ justifyContent: "space-between" }}>
              <DataTitle>아트워크</DataTitle>
              <TouchableOpacity
                onPress={() =>
                  goToSubPage({
                    title: "아트워크",
                    classification: "I", // Sub page initial
                    contents: artworks,
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
              {artworks.map((artwork, index) => {
                if (index >= 2) return;
                return (
                  <Screenshot key={artwork.id} imageId={artwork.image_id} />
                );
              })}
            </RowBox>
          </DataBox>
        ) : null}
        {involvedCompanies ? (
          <DataBox>
            <DataTitle>게임 회사</DataTitle>
            <RowBox
              styles={{
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
        {websites ? (
          <DataBox>
            <DataTitle>사이트</DataTitle>
            <RowBox styles={{ flexWrap: "wrap" }}>
              {websites.map((website) => (
                <WebsiteButton
                  key={website.id}
                  url={website.url}
                  category={website.category}
                />
              ))}
            </RowBox>
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
