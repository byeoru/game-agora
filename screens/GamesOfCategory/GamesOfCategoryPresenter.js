import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import OriginNotation from "../../components/OriginNotation";
import ContentsBox from "../../components/ContentsBox";
import TopHeader from "../../components/TopHeader";
import GridLayout from "../../components/GridLayout";
import { getAfterTheFourthTheRest, getYMDAgoNow } from "../../utils";
import ContentsDescription from "../../components/ContentsDescription";
import ContentsMore from "../../components/ContentsMore";
import orderingObj from "../../obj/orderingObj";
import { Button } from "react-native";

export default ({ loading, results, title, genreOrPlatformParms }) => {
  return (
    <ScrollContainer loading={loading}>
      <ContentsBox>
        <TopHeader title="평점순" />
        <ContentsDescription text="지난 100일 사이 출시" />
        <ContentsMore
          title={`${title} 평점순`}
          getMoreFnParams={{
            dates: getYMDAgoNow(100),
            ...genreOrPlatformParms,
            ordering: orderingObj._rating,
            page: 1,
            page_size: 18,
          }}
        />
        {results?.orderOfRating ? (
          <GridLayout
            gameFir={results.orderOfRating[0]}
            gameSec={results.orderOfRating[1]}
            gameThi={results.orderOfRating[2]}
            gameFou={results.orderOfRating[3]}
            gameTheRest={getAfterTheFourthTheRest(results.orderOfRating)}
            styles={{ marginTop: 80 }}
          />
        ) : null}
      </ContentsBox>
      <ContentsBox>
        <TopHeader title="인기순" />
        <ContentsDescription text="지난 100일 사이 출시" />
        <ContentsMore
          title={`${title} 인기순`}
          getMoreFnParams={{
            dates: getYMDAgoNow(100),
            ...genreOrPlatformParms,
            ordering: orderingObj._added,
            page: 1,
            page_size: 18,
          }}
        />
        {results?.orderOfPopularity ? (
          <GridLayout
            gameFir={results.orderOfPopularity[0]}
            gameSec={results.orderOfPopularity[1]}
            gameThi={results.orderOfPopularity[2]}
            gameFou={results.orderOfPopularity[3]}
            gameTheRest={getAfterTheFourthTheRest(results.orderOfPopularity)}
            styles={{ marginTop: 80 }}
          />
        ) : null}
      </ContentsBox>
      <ContentsBox>
        <TopHeader title="출시일순" />
        <ContentsDescription text="지난 100일 사이 출시" />
        <ContentsMore
          title={`${title} 출시일순`}
          getMoreFnParams={{
            dates: getYMDAgoNow(100),
            ...genreOrPlatformParms,
            ordering: orderingObj._released,
            page: 1,
            page_size: 18,
          }}
        />
        {results?.orderOfDate ? (
          <GridLayout
            gameFir={results.orderOfDate[0]}
            gameSec={results.orderOfDate[1]}
            gameThi={results.orderOfDate[2]}
            gameFou={results.orderOfDate[3]}
            gameTheRest={getAfterTheFourthTheRest(results.orderOfDate)}
            styles={{ marginTop: 80 }}
          />
        ) : null}
      </ContentsBox>
      <OriginNotation styles={{ paddingBottom: 20 }} />
    </ScrollContainer>
  );
};
