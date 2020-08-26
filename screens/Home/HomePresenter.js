import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import SwiperContents from "../../components/Home/SwiperContents";
import ContentBox from "../../components/ContentsBox";
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
const TagContainer = styled.View`
  width: 100%;
  margin-top: 80px;
`;

export default ({
  loading,
  highRating,
  popularPc,
  popularAndroid,
  popularIos,
}) => (
  <ScrollContainer loading={loading}>
    <SwiperContainer>
      <Swiper controlsEnabled={false} loop timeout={3}>
        {highRating.map((game) => {
          return (
            <SwiperContents
              key={game.id}
              title={game.name}
              rating={game.rating}
              criticRating={game.aggregated_rating}
              totalRating={game.total_rating}
              firstReleaseD={game.first_release_date}
              platforms={game.platforms}
              backgroundImage={game.cover.image_id}
              involvedCompanies={game.involved_companies}
              genres={game.genres}
              summary={game.summary}
              storyline={game.storyline}
              screenshots={game.screenshots}
              artworks={game.artworks}
              videos={game.videos}
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
    </ContentBox> */}
    <ContentBox>
      <TopHeader title="인기작" />
      <ContentsDescription text="최근 90일 사이 출시된 게임" />
      <ContentsHeader title="PC" styles={{ marginTop: 80 }} />
      <HorizontalContainer>
        <HorizotalSlider>
          {popularPc.map((game) => (
            <Vertical
              key={game.id}
              title={game.name}
              rating={game.rating}
              criticRating={game.aggregated_rating}
              totalRating={game.total_rating}
              firstReleaseD={game.first_release_date}
              platforms={game.platforms}
              backgroundImage={game.cover.image_id}
              involvedCompanies={game.involved_companies}
              genres={game.genres}
              summary={game.summary}
              storyline={game.storyline}
              screenshots={game.screenshots}
              artworks={game.artworks}
              videos={game.videos}
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
              title={game.name}
              rating={game.rating}
              criticRating={game.aggregated_rating}
              totalRating={game.total_rating}
              firstReleaseD={game.first_release_date}
              platforms={game.platforms}
              backgroundImage={game.cover.image_id}
              involvedCompanies={game.involved_companies}
              genres={game.genres}
              summary={game.summary}
              storyline={game.storyline}
              screenshots={game.screenshots}
              artworks={game.artworks}
              videos={game.videos}
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
              title={game.name}
              rating={game.rating}
              criticRating={game.aggregated_rating}
              totalRating={game.total_rating}
              firstReleaseD={game.first_release_date}
              platforms={game.platforms}
              backgroundImage={game.cover.image_id}
              involvedCompanies={game.involved_companies}
              genres={game.genres}
              summary={game.summary}
              storyline={game.storyline}
              screenshots={game.screenshots}
              artworks={game.artworks}
              videos={game.videos}
            />
          ))}
        </HorizotalSlider>
      </HorizontalContainer>
    </ContentBox>
    <OriginNotation />
  </ScrollContainer>
);
