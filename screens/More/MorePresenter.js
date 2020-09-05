import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import OriginNotation from "../../components/OriginNotation";
import ContentsBox from "../../components/ContentsBox";
import TopHeader from "../../components/TopHeader";
import GridLayout from "../../components/GridLayout";
import { getAfterTheFourthTheRest } from "../../utils";

export default ({ loading, results }) => (
  <ScrollContainer loading={loading}>
    <ContentsBox>
      <TopHeader title="평점순" />
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
