import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
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
import Rowbox from "../../components/RowBox";
import ContentsMore from "../../components/ContentsMore";
import { getYMDAgoNow, HEIGHT, WIDTH } from "../../utils";
import pPlatformsNumObj from "../../obj/pPlatformsNumObj";
import orderingObj from "../../obj/orderingObj";
import i18n from "i18n-js";

const SwiperContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 2.2}px;
`;
const NewWorkContainer = styled.ScrollView`
  height: 400px;
  margin-top: 80px;
`;

export default ({
  firstLoading,
  loading,
  highRating,
  newWork,
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
    <ContentsBox styles={{ height: 500 }}>
      <TopHeader title={i18n.t("newWork")} />
      <ContentsDescription text={i18n.t("_7days")} />
      <ContentsMore
        title={i18n.t("newWork")}
        getMoreFnParams={{
          contentsBoxTitle: `${i18n.t("orderByReleaseDate")}`,
          contentsDescription: `${i18n.t("_7days")}`,
          dates: getYMDAgoNow(7),
          ordering: "-released",
          page: 1,
          page_size: 13,
        }}
      />
      <NewWorkContainer nestedScrollEnabled={true}>
        <Rowbox
          styles={{
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {newWork.map((game) => (
            <Vertical
              key={game.id}
              id={game.id}
              title={game.name}
              backgroundImage={game.background_image}
              styles={{
                width: WIDTH / 3.3,
                height: WIDTH / 2,
                marginRight: 0,
                marginBottom: 10,
              }}
            />
          ))}
        </Rowbox>
      </NewWorkContainer>
    </ContentsBox>
    <ContentsBox>
      <TopHeader title={i18n.t("popular")} />
      <ContentsDescription text={i18n.t("_100days")} />
      <ContentsHeader title="PC" styles={{ marginTop: 80 }}>
        <ContentsMore
          title="PC"
          getMoreFnParams={{
            contentsBoxTitle: `${i18n.t("orderByPopularity")}`,
            contentsDescription: `${i18n.t("_100days")}`,
            dates: getYMDAgoNow(100),
            parent_platforms: pPlatformsNumObj.PC,
            ordering: orderingObj._added,
            page: 1,
            page_size: 13,
          }}
          styles={{ marginTop: 90 }}
        />
      </ContentsHeader>
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
      <ContentsHeader title="iOS">
        <ContentsMore
          title="iOS"
          getMoreFnParams={{
            contentsBoxTitle: `${i18n.t("orderByPopularity")}`,
            contentsDescription: `${i18n.t("_100days")}`,
            dates: getYMDAgoNow(100),
            parent_platforms: pPlatformsNumObj.iOS,
            ordering: orderingObj._added,
            page: 1,
            page_size: 13,
          }}
          styles={{ marginTop: 10 }}
        />
      </ContentsHeader>
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
      <ContentsHeader title="Android">
        <ContentsMore
          title="Android"
          getMoreFnParams={{
            contentsBoxTitle: `${i18n.t("orderByPopularity")}`,
            contentsDescription: `${i18n.t("_100days")}`,
            dates: getYMDAgoNow(100),
            parent_platforms: pPlatformsNumObj.Android,
            ordering: orderingObj._added,
            page: 1,
            page_size: 13,
          }}
          styles={{ marginTop: 10 }}
        />
      </ContentsHeader>
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
