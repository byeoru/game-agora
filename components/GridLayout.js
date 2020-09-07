import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { getRawgImg } from "../api";
import rawgImgSizeObj from "../obj/rawgImgSizeObj";
import useGameDetail from "./useGameDetail";

const { width: WIDTH } = Dimensions.get("window");

const TouchableOpacity = styled.TouchableOpacity``;
const Container = styled.View`
  width: 100%;
`;
const BG = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: black;
`;
const HeaderGrid = styled.View`
  width: 100%;
  height: ${WIDTH / 2}px;
  flex-direction: row;
  justify-content: space-around;
`;
const LeftColumn = styled.View`
  width: 49%;
  height: 100%;
  border-radius: 5px;
`;
const RightColumn = styled.View`
  width: 49%;
  height: 100%;
  justify-content: space-between;
`;
const RightTopRow = styled.View`
  width: 100%;
  height: 49%;
`;
const RightBottomRow = styled.View`
  width: 100%;
  height: 49%;
  flex-direction: row;
  justify-content: space-between;
`;
const RightBottomRowLeftColumn = styled.View`
  width: 49%;
  height: 100%;
`;
const RightBottomRowRightColumn = styled.View`
  width: 49%;
  height: 100%;
`;
const FooterGrid = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const FooterBox = styled.View`
  width: ${WIDTH / 3.2}px;
  height: ${WIDTH / 2}px;
`;
const Box = styled.View`
  width: 100%;
  background-color: black;
  border-radius: 15px;
`;

export default ({
  styles,
  gameFir,
  gameSec,
  gameThi,
  gameFou,
  gameTheRest,
}) => {
  const goToDetail = useGameDetail();
  return (
    <Container style={{ ...styles }}>
      <HeaderGrid>
        <LeftColumn>
          {gameFir ? (
            <TouchableOpacity
              onPress={() =>
                goToDetail({
                  id: gameFir.id,
                  title: gameFir.name,
                  backgroundImage: gameFir.background_image,
                })
              }
            >
              <Box style={{ height: "100%" }}>
                {gameFir.background_image ? (
                  <BG
                    resizeMethod="resize"
                    source={{
                      uri: getRawgImg(
                        gameFir.background_image,
                        rawgImgSizeObj.w640
                      ),
                    }}
                  />
                ) : null}
              </Box>
            </TouchableOpacity>
          ) : null}
        </LeftColumn>
        <RightColumn>
          <RightTopRow>
            {gameSec ? (
              <TouchableOpacity
                onPress={() =>
                  goToDetail({
                    id: gameSec.id,
                    title: gameSec.name,
                    backgroundImage: gameSec.background_image,
                  })
                }
              >
                <Box style={{ height: "100%" }}>
                  {gameSec.background_image ? (
                    <BG
                      resizeMethod="resize"
                      source={{
                        uri: getRawgImg(
                          gameSec.background_image,
                          rawgImgSizeObj.w640
                        ),
                      }}
                    />
                  ) : null}
                </Box>
              </TouchableOpacity>
            ) : null}
          </RightTopRow>
          <RightBottomRow>
            <RightBottomRowLeftColumn>
              {gameThi ? (
                <TouchableOpacity
                  onPress={() =>
                    goToDetail({
                      id: gameThi.id,
                      title: gameThi.name,
                      backgroundImage: gameThi.background_image,
                    })
                  }
                >
                  <Box style={{ height: "100%" }}>
                    {gameThi.background_image ? (
                      <BG
                        resizeMethod="resize"
                        source={{
                          uri: getRawgImg(
                            gameThi.background_image,
                            rawgImgSizeObj.w640
                          ),
                        }}
                      />
                    ) : null}
                  </Box>
                </TouchableOpacity>
              ) : null}
            </RightBottomRowLeftColumn>
            <RightBottomRowRightColumn>
              {gameFou ? (
                <TouchableOpacity
                  onPress={() =>
                    goToDetail({
                      id: gameFou.id,
                      title: gameFou.name,
                      backgroundImage: gameFou.background_image,
                    })
                  }
                >
                  <Box style={{ height: "100%" }}>
                    {gameFou.background_image ? (
                      <BG
                        resizeMethod="resize"
                        source={{
                          uri: getRawgImg(
                            gameFou.background_image,
                            rawgImgSizeObj.w640
                          ),
                        }}
                      />
                    ) : null}
                  </Box>
                </TouchableOpacity>
              ) : null}
            </RightBottomRowRightColumn>
          </RightBottomRow>
        </RightColumn>
      </HeaderGrid>
      <FooterGrid>
        {gameTheRest.map((game) => (
          <TouchableOpacity
            key={game.id}
            onPress={() =>
              goToDetail({
                id: game.id,
                title: game.name,
                backgroundImage: game.background_image,
              })
            }
          >
            <Box style={{ marginVertical: 2 }}>
              <FooterBox>
                {game.background_image ? (
                  <BG
                    resizeMethod="resize"
                    source={{
                      uri: getRawgImg(
                        game.background_image,
                        rawgImgSizeObj.w640
                      ),
                    }}
                  />
                ) : null}
              </FooterBox>
            </Box>
          </TouchableOpacity>
        ))}
      </FooterGrid>
    </Container>
  );
};
