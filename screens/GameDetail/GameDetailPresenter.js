import React, { useRef, useEffect } from "react";
import styled from "styled-components/native";
import BottomSheet from "reanimated-bottom-sheet";
import { TouchableOpacity, Clipboard } from "react-native";
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
import { HEIGHT, WIDTH } from "../../utils";
import i18n from "i18n-js";
import { DotsLoader } from "react-native-indicator";

export default ({
  navigation,
  loading,
  title,
  backgroundImage,
  rating,
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
  const BGwidth = WIDTH / 1.1;
  const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
  `;
  const BG = styled.Image`
    width: ${BGwidth}px;
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
  const Text = styled.Text``;
  const LoaderContainer = styled.View`
    position: absolute;
    bottom: 130px;
  `;

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
            <DataTitle>{i18n.t("releaseDate")}</DataTitle>
            <Text>{released}</Text>
          </DataBox>
          <DataBox style={{ flex: 2, marginLeft: 10 }}>
            <DataTitle>{i18n.t("genres")}</DataTitle>
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
          <DataTitle>{i18n.t("platforms")}</DataTitle>
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
        <DataBox>
          <DataTitle>{i18n.t("rating")}</DataTitle>
          <Rating rating={rating} />
        </DataBox>
        {ratings?.length > 0 ? (
          <DataBox>
            <DataTitle>{i18n.t("ratings")}</DataTitle>
            <BarChart ratings={ratings} />
          </DataBox>
        ) : null}
        {description ? (
          <DataBox>
            <RowBox styles={{ justifyContent: "space-between" }}>
              <DataTitle>{i18n.t("description")}</DataTitle>
              {i18n.locale === "ko-KR" ? (
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
              ) : null}
            </RowBox>
            <Text>{description}</Text>
          </DataBox>
        ) : null}
        {video ? (
          <DataBox>
            <DataTitle>{i18n.t("video")}</DataTitle>
            <VideoHorizontal videoId={video} height={200} />
          </DataBox>
        ) : null}
        {screenshots?.length > 0 ? (
          <DataBox>
            <RowBox styles={{ justifyContent: "space-between" }}>
              <DataTitle>{i18n.t("screenshots")}</DataTitle>
              <TouchableOpacity
                onPress={() =>
                  goToSubPage({
                    title: `${i18n.t("screenshots")}`,
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
            <DataTitle>{i18n.t("developers")}</DataTitle>
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
                  backgroundImage={company.image_background}
                />
              ))}
            </RowBox>
          </DataBox>
        ) : null}
        {publishers?.length > 0 ? (
          <DataBox>
            <DataTitle>{i18n.t("publishers")}</DataTitle>
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
                  backgroundImage={company.image_background}
                />
              ))}
            </RowBox>
          </DataBox>
        ) : null}
        {website ? (
          <DataBox>
            <DataTitle>{i18n.t("website")}</DataTitle>
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
  }, [loading]);
  return (
    <Container>
      {backgroundImage ? (
        <BG
          resizeMethod="resize"
          source={{
            uri: getRawgImg(backgroundImage, rawgImgSizeObj.w640),
          }}
        />
      ) : null}
      {loading ? (
        <LoaderContainer>
          <DotsLoader size={9} color="rgba(100,100,100,0.3)" betweenSpace={7} />
        </LoaderContainer>
      ) : (
        <BottomSheet
          ref={sheetRef}
          snapPoints={["0%", WIDTH / 1.2, "100%"]}
          borderRadius={20}
          renderContent={renderContent}
          onCloseEnd={onCloseEnd}
          enabledContentTapInteraction={false}
        />
      )}
    </Container>
  );
};
