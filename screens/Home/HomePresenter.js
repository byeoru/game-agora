import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import { Dimensions } from "react-native";
import Swiper from "react-native-swiper";
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
import BorderText from "../../components/BoderText";
import RowBox from "../../components/RowBox";

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
  firstLoading,
  loading,
  highRating,
  popularPc,
  popularIos,
  popularAndroid,
  themes,
}) => (
  <ScrollContainer loading={loading} firstLoading={firstLoading}>
    <SwiperContainer>
      <Swiper autoplay autoplayTimeout={3} showsPagination={false}>
        {highRating.map((game) => (
          <SwiperContents
            key={game.id}
            name={game.name} // prop 이름을 title 로 하면 error 일으킴
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
            websites={game.websites}
            popularity={game.popularity}
          />
        ))}
      </Swiper>
    </SwiperContainer>
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
              websites={game.websites}
              popularity={game.popularity}
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
              websites={game.websites}
              popularity={game.popularity}
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
              websites={game.websites}
              popularity={game.popularity}
            />
          ))}
        </HorizotalSlider>
      </HorizontalContainer>
    </ContentBox>
    <ContentBox>
      <TopHeader title="테마" />
      <ContentsDescription text="게임 테마" />
      <RowBox
        styles={{ flexWrap: "wrap", justifyContent: "center", marginTop: 80 }}
      >
        {themes.map((theme) => (
          <BorderText key={theme.id} text={theme.name} />
        ))}
      </RowBox>
    </ContentBox>
    <OriginNotation />
  </ScrollContainer>
);
