import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import ContentsBox from "../../components/ContentsBox";
import TopHeader from "../../components/TopHeader";
import ContentsDescription from "../../components/ContentsDescription";
import GridLayout from "../../components/GridLayout";
import OriginNotation from "../../components/OriginNotation";

export default ({
  loading,
  PointAndClick,
  Fighting,
  Shooter,
  Music,
  Platform,
  Puzzle,
  Racing,
  RTS,
  RPG,
  Simulator,
}) => (
  <ScrollContainer loading={loading}>
    <ContentsBox>
      <TopHeader title="포인트 앤 클릭" />
      <ContentsDescription text="abc" />
      <GridLayout styles={{ marginTop: 80 }}>{PointAndClick}</GridLayout>
    </ContentsBox>
    <ContentsBox>
      <TopHeader title="파이팅" />
      <ContentsDescription text="abc" />
      <GridLayout styles={{ marginTop: 80 }}>{Fighting}</GridLayout>
    </ContentsBox>
    <ContentsBox>
      <TopHeader title="슈팅" />
      <ContentsDescription text="abc" />
      <GridLayout styles={{ marginTop: 80 }}>{Shooter}</GridLayout>
    </ContentsBox>
    <ContentsBox>
      <TopHeader title="뮤직" />
      <ContentsDescription text="abc" />
      <GridLayout styles={{ marginTop: 80 }}>{Music}</GridLayout>
    </ContentsBox>
    <ContentsBox>
      <TopHeader title="플랫폼" />
      <ContentsDescription text="abc" />
      <GridLayout styles={{ marginTop: 80 }}>{Platform}</GridLayout>
    </ContentsBox>
    <ContentsBox>
      <TopHeader title="퍼즐" />
      <ContentsDescription text="abc" />
      <GridLayout styles={{ marginTop: 80 }}>{Puzzle}</GridLayout>
    </ContentsBox>
    <ContentsBox>
      <TopHeader title="레이싱" />
      <ContentsDescription text="abc" />
      <GridLayout styles={{ marginTop: 80 }}>{Racing}</GridLayout>
    </ContentsBox>
    <ContentsBox>
      <TopHeader title="RTS" />
      <ContentsDescription text="abc" />
      <GridLayout styles={{ marginTop: 80 }}>{RTS}</GridLayout>
    </ContentsBox>
    <ContentsBox>
      <TopHeader title="RPG" />
      <ContentsDescription text="abc" />
      <GridLayout styles={{ marginTop: 80 }}>{RPG}</GridLayout>
    </ContentsBox>
    <ContentsBox>
      <TopHeader title="시뮬레이션" />
      <ContentsDescription text="abc" />
      <GridLayout styles={{ marginTop: 80 }}>{Simulator}</GridLayout>
    </ContentsBox>
    <OriginNotation />
  </ScrollContainer>
);
