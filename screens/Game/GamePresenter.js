import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import SwiperContents from "../../components/Game/SwiperContents";
import ContentBox from "../../components/ContentsBox";
import ContentsHeader from "../../components/ContentsHeader";
import Vertical from "../../components/Vertical";
import styled from "styled-components/native";
import HorizotalSlider from "../../components/HorizontalSlider";
import TopHeader from "../../components/TopHeader";
import ContentsDescription from "../../components/ContentsDescription";
import HorizontalContainer from "../../components/HorizontalContainer";
import OriginNotation from "../../components/OriginNotation";
import TagButton from "../../components/Game/TagButton";

const { height: HEIGHT } = Dimensions.get("window");
const SwiperContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 2.2}px;
`;
const TagContainer = styled.View`
  width: 100%;
  margin-top: 80px;
`;

export default ({ loading, highRating }) => (
  <ScrollContainer loading={loading}>
    <SwiperContainer>
      <Swiper controlsEnabled={false} loop timeout={3}>
        {highRating.map((game) => {
          return (
            <SwiperContents
              key={game.id}
              id={game.id}
              title={game.name}
              rating={game.rating}
              released={game.first_release_date}
              platforms={game.platforms}
              backgroundImage={game.cover.image_id}
            />
          );
        })}
      </Swiper>
    </SwiperContainer>
    {/* <ContentBox>
      <TopHeader title="태그" />
      <ContentsDescription text="게임 분류" />
      <TagContainer>
        {listOfTags.map((tag) => (
          <TagButton
            key={tag.id}
            name={tag.name}
            backgroundImage={tag.image_background}
          />
        ))}
      </TagContainer>
    </ContentBox>
    <ContentBox>
      <TopHeader title="인기작" />
      <ContentsDescription text="최근 3개월간 출시된 게임" />
      <ContentsHeader title="PC" styles={{ marginTop: 80 }} />
      <HorizontalContainer>
        <HorizotalSlider>
          {poNowToThrMonAgo.pc.map((game) => (
            <Vertical
              key={game.id}
              id={game.id}
              title={game.name}
              backgroundImage={game.background_image}
            />
          ))}
        </HorizotalSlider>
      </HorizontalContainer>
      <ContentsHeader title="IOS" />
      <HorizontalContainer>
        <HorizotalSlider>
          {poNowToThrMonAgo.ios.map((game) => (
            <Vertical
              key={game.id}
              id={game.id}
              title={game.name}
              backgroundImage={game.background_image}
            />
          ))}
        </HorizotalSlider>
      </HorizontalContainer>
      <ContentsHeader title="안드로이드" />
      <HorizontalContainer>
        <HorizotalSlider>
          {poNowToThrMonAgo.android.map((game) => (
            <Vertical
              key={game.id}
              id={game.id}
              title={game.name}
              backgroundImage={game.background_image}
            />
          ))}
        </HorizotalSlider>
      </HorizontalContainer>
    </ContentBox> */}
    <OriginNotation />
  </ScrollContainer>
);
