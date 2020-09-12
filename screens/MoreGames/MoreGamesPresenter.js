import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import RowBox from "../../components/RowBox";
import GridLayout from "../../components/GridLayout";
import { getAfterTheFourthTheRest } from "../../utils";
import ContentsBox from "../../components/ContentsBox";
import ContentsDescription from "../../components/ContentsDescription";
import TopHeader from "../../components/TopHeader";
import OriginNotation from "../../components/OriginNotation";
import styled from "styled-components/native";
import { CirclesLoader } from "react-native-indicator";
import { AdMobRewarded } from "expo-ads-admob";
import i18n from "i18n-js";

const MoreButton = styled.TouchableOpacity`
  width: 50%;
  height: 40px;
  background-color: rgba(100, 100, 100, 0.4);
  border-radius: 15px;
  align-self: center;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  text-align: center;
  padding: 10px;
`;

export default ({
  loading,
  showMoreBtn,
  results,
  getShowMoreData,
  contentsBoxTitle,
  contentsDescription,
  moreLoading,
  setMoreLoading,
  pageNum,
}) => {
  return (
    <ScrollContainer loading={loading}>
      <ContentsBox styles={{ marginTop: 10 }}>
        <TopHeader title={contentsBoxTitle} />
        <ContentsDescription text={contentsDescription} />
        <RowBox
          styles={{
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginTop: 80,
          }}
        >
          {
            <GridLayout
              gameFir={results[0]}
              gameSec={results[1]}
              gameThi={results[2]}
              gameFou={results[3]}
              gameTheRest={getAfterTheFourthTheRest(results)}
            />
          }
        </RowBox>
        {showMoreBtn ? (
          <MoreButton
            onPress={async () => {
              if (pageNum % 2 === 0) {
                setMoreLoading(true);
                AdMobRewarded.addEventListener(
                  "rewardedVideoDidRewardUser",
                  () => getShowMoreData()
                );
                await AdMobRewarded.setAdUnitID(
                  "ca-app-pub-3940256099942544/5224354917"
                );
                await AdMobRewarded.requestAdAsync();
                await AdMobRewarded.showAdAsync();
              } else {
                setMoreLoading(true);
                getShowMoreData();
              }
            }}
          >
            {moreLoading ? (
              <CirclesLoader size={20} color="black" dotRadius={2} />
            ) : (
              <Text>{i18n.t("more")}</Text>
            )}
          </MoreButton>
        ) : null}
      </ContentsBox>
      <OriginNotation styles={{ paddingBottom: 20 }} />
    </ScrollContainer>
  );
};
