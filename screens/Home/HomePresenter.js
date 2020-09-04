import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import { Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import SwiperContents from "../../components/Home/SwiperContents";
import ContentsBox from "../../components/ContentsBox";
import ContentsHeader from "../../components/ContentsHeader";
import Vertical from "../../components/Vertical";
import styled from "styled-components/native";
import HorizotalSlider from "../../components/HorizontalSlider";
import TopHeader from "../../components/TopHeader";
import ContentsDescription from "../../components/ContentsDescription";
import HorizontalContainer from "../../components/HorizontalContainer";
import OriginNotation from "../../components/OriginNotation";

const { height: HEIGHT } = Dimensions.get("window");
const SwiperContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 2.2}px;
`;

export default ({
  firstLoading,
  loading,
  highRating,
  popularPc,
  popularIos,
  popularAndroid,
}) => (
  <ScrollContainer loading={loading} firstLoading={firstLoading}>
    <SwiperContainer>
      <Swiper autoplay autoplayTimeout={3} showsPagination={false}>
        {highRating.map((game) => (
          <SwiperContents
            key={game.id}
            id={game.id}
            name={game.name} // prop 이름을 title 로 하면 error 일으킴
            rating={game.rating}
            released={game.released}
            parentPlatforms={game.parent_platforms}
            backgroundImage={game.background_image}
          />
        ))}
      </Swiper>
    </SwiperContainer>
    <ContentsBox>
      <TopHeader title="인기작" />
      <ContentsDescription text="최근 200일 사이 출시된 게임" />
      <ContentsHeader title="PC" styles={{ marginTop: 80 }} />
      <HorizontalContainer>
        <HorizotalSlider>
          {popularPc.map((game) => (
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
          {popularIos.map((game) => (
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
          {popularAndroid.map((game) => (
            <Vertical
              key={game.id}
              id={game.id}
              title={game.name}
              backgroundImage={game.background_image}
            />
          ))}
        </HorizotalSlider>
      </HorizontalContainer>
    </ContentsBox>
    <OriginNotation />
  </ScrollContainer>
);
