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
}) => {
  const getTheRest = (array) => {
    const [, , , , ...theRest] = array;
    return theRest;
  };
  return (
    <ScrollContainer loading={loading}>
      <ContentsBox>
        <TopHeader title="포인트 앤 클릭" />
        <ContentsDescription text="abc" />
        <GridLayout
          gameFir={PointAndClick[0]}
          gameSec={PointAndClick[1]}
          gameThi={PointAndClick[2]}
          gameFou={PointAndClick[3]}
          gameTheRest={getTheRest(PointAndClick)}
          styles={{ marginTop: 80 }}
        ></GridLayout>
      </ContentsBox>
      <ContentsBox>
        <TopHeader title="파이팅" />
        <ContentsDescription text="abc" />
        <GridLayout
          gameFir={Fighting[0]}
          gameSec={Fighting[1]}
          gameThi={Fighting[2]}
          gameFou={Fighting[3]}
          gameTheRest={getTheRest(Fighting)}
          styles={{ marginTop: 80 }}
        ></GridLayout>
      </ContentsBox>
      <ContentsBox>
        <TopHeader title="슈팅" />
        <ContentsDescription text="abc" />
        <GridLayout
          gameFir={Shooter[0]}
          gameSec={Shooter[1]}
          gameThi={Shooter[2]}
          gameFou={Shooter[3]}
          gameTheRest={getTheRest(Shooter)}
          styles={{ marginTop: 80 }}
        ></GridLayout>
      </ContentsBox>
      <ContentsBox>
        <TopHeader title="뮤직" />
        <ContentsDescription text="abc" />
        <GridLayout
          gameFir={Music[0]}
          gameSec={Music[1]}
          gameThi={Music[2]}
          gameFou={Music[3]}
          gameTheRest={getTheRest(Music)}
          styles={{ marginTop: 80 }}
        ></GridLayout>
      </ContentsBox>
      <ContentsBox>
        <TopHeader title="플랫폼" />
        <ContentsDescription text="abc" />
        <GridLayout
          gameFir={Platform[0]}
          gameSec={Platform[1]}
          gameThi={Platform[2]}
          gameFou={Platform[3]}
          gameTheRest={getTheRest(Platform)}
          styles={{ marginTop: 80 }}
        ></GridLayout>
      </ContentsBox>
      <ContentsBox>
        <TopHeader title="퍼즐" />
        <ContentsDescription text="abc" />
        <GridLayout
          gameFir={Puzzle[0]}
          gameSec={Puzzle[1]}
          gameThi={Puzzle[2]}
          gameFou={Puzzle[3]}
          gameTheRest={getTheRest(Puzzle)}
          styles={{ marginTop: 80 }}
        ></GridLayout>
      </ContentsBox>
      <ContentsBox>
        <TopHeader title="레이싱" />
        <ContentsDescription text="abc" />
        <GridLayout
          gameFir={Racing[0]}
          gameSec={Racing[1]}
          gameThi={Racing[2]}
          gameFou={Racing[3]}
          gameTheRest={getTheRest(Racing)}
          styles={{ marginTop: 80 }}
        ></GridLayout>
      </ContentsBox>
      <ContentsBox>
        <TopHeader title="RTS" />
        <ContentsDescription text="abc" />
        <GridLayout
          gameFir={RTS[0]}
          gameSec={RTS[1]}
          gameThi={RTS[2]}
          gameFou={RTS[3]}
          gameTheRest={getTheRest(RTS)}
          styles={{ marginTop: 80 }}
        ></GridLayout>
      </ContentsBox>
      <ContentsBox>
        <TopHeader title="RPG" />
        <ContentsDescription text="abc" />
        <GridLayout
          gameFir={RPG[0]}
          gameSec={RPG[1]}
          gameThi={RPG[2]}
          gameFou={RPG[3]}
          gameTheRest={getTheRest(RPG)}
          styles={{ marginTop: 80 }}
        ></GridLayout>
      </ContentsBox>
      <ContentsBox>
        <TopHeader title="시뮬레이션" />
        <ContentsDescription text="abc" />
        <GridLayout
          gameFir={Simulator[0]}
          gameSec={Simulator[1]}
          gameThi={Simulator[2]}
          gameFou={Simulator[3]}
          gameTheRest={getTheRest(Simulator)}
          styles={{ marginTop: 80 }}
        ></GridLayout>
      </ContentsBox>
      <OriginNotation />
    </ScrollContainer>
  );
};
