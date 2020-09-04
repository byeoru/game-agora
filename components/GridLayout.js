import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { getImage } from "../api";
import { TouchableOpacity } from "react-native";
import useGameDetail from "./useGameDetail";

const { width: WIDTH } = Dimensions.get("window");

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
`;
const LeftColumn = styled.View`
  width: 50%;
  height: 100%;
  border-radius: 5px;
`;
const RightColumn = styled.View`
  width: 50%;
  height: 100%;
`;
const RightTopRow = styled.View`
  width: 100%;
  height: 50%;
`;
const RightBottomRow = styled.View`
  width: 100%;
  height: 50%;
  flex-direction: row;
`;
const RightBottomRowLeftColumn = styled.View`
  width: 50%;
  height: 100%;
`;
const RightBottomRowRightColumn = styled.View`
  width: 50%;
  height: 100%;
`;
const FooterGrid = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
                  title: gameFir.name,
                  rating: gameFir.rating,
                  criticRating: gameFir.aggregated_rating,
                  totalRating: gameFir.total_rating,
                  firstReleaseD: gameFir.first_release_date,
                  platforms: gameFir.platforms,
                  backgroundImage: gameFir.cover?.image_id,
                  involvedCompanies: gameFir.involved_companies,
                  genres: gameFir.genres,
                  summary: gameFir.summary,
                  storyline: gameFir.storyline,
                  screenshots: gameFir.screenshots,
                  artworks: gameFir.artworks,
                  videos: gameFir.videos,
                  websites: gameFir.websites,
                  popularity: gameFir.popularity,
                })
              }
            >
              <Box style={{ height: "100%" }}>
                {gameFir.cover?.image_id ? (
                  <BG
                    resizeMethod="resize"
                    source={{
                      uri: getImage(
                        gameFir.cover.image_id,
                        imageSizeObj._720p1280x720
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
                    title: gameSec.name,
                    rating: gameSec.rating,
                    criticRating: gameSec.aggregated_rating,
                    totalRating: gameSec.total_rating,
                    firstReleaseD: gameSec.first_release_date,
                    platforms: gameSec.platforms,
                    backgroundImage: gameSec.cover?.image_id,
                    involvedCompanies: gameSec.involved_companies,
                    genres: gameSec.genres,
                    summary: gameSec.summary,
                    storyline: gameSec.storyline,
                    screenshots: gameSec.screenshots,
                    artworks: gameSec.artworks,
                    videos: gameSec.videos,
                    websites: gameSec.websites,
                    popularity: gameSec.popularity,
                  })
                }
              >
                <Box style={{ height: "100%" }}>
                  {gameSec.cover?.image_id ? (
                    <BG
                      resizeMethod="resize"
                      source={{
                        uri: getImage(
                          gameSec.cover.image_id,
                          imageSizeObj._720p1280x720
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
                      title: gameThi.name,
                      rating: gameThi.rating,
                      criticRating: gameThi.aggregated_rating,
                      totalRating: gameThi.total_rating,
                      firstReleaseD: gameThi.first_release_date,
                      platforms: gameThi.platforms,
                      backgroundImage: gameThi.cover?.image_id,
                      involvedCompanies: gameThi.involved_companies,
                      genres: gameThi.genres,
                      summary: gameThi.summary,
                      storyline: gameThi.storyline,
                      screenshots: gameThi.screenshots,
                      artworks: gameThi.artworks,
                      videos: gameThi.videos,
                      websites: gameThi.websites,
                      popularity: gameThi.popularity,
                    })
                  }
                >
                  <Box style={{ height: "100%" }}>
                    {gameThi.cover?.image_id ? (
                      <BG
                        resizeMethod="resize"
                        source={{
                          uri: getImage(
                            gameThi.cover.image_id,
                            imageSizeObj._720p1280x720
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
                      title: gameFou.name,
                      rating: gameFou.rating,
                      criticRating: gameFou.aggregated_rating,
                      totalRating: gameFou.total_rating,
                      firstReleaseD: gameFou.first_release_date,
                      platforms: gameFou.platforms,
                      backgroundImage: gameFou.cover?.image_id,
                      involvedCompanies: gameFou.involved_companies,
                      genres: gameFou.genres,
                      summary: gameFou.summary,
                      storyline: gameFou.storyline,
                      screenshots: gameFou.screenshots,
                      artworks: gameFou.artworks,
                      videos: gameFou.videos,
                      websites: gameFou.websites,
                      popularity: gameFou.popularity,
                    })
                  }
                >
                  <Box style={{ height: "100%" }}>
                    {gameFou.cover?.image_id ? (
                      <BG
                        resizeMethod="resize"
                        source={{
                          uri: getImage(
                            gameFou.cover.image_id,
                            imageSizeObj._720p1280x720
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
                title: game.name,
                rating: game.rating,
                criticRating: game.aggregated_rating,
                totalRating: game.total_rating,
                firstReleaseD: game.first_release_date,
                platforms: game.platforms,
                backgroundImage: game.cover?.image_id,
                involvedCompanies: game.involved_companies,
                genres: game.genres,
                summary: game.summary,
                storyline: game.storyline,
                screenshots: game.screenshots,
                artworks: game.artworks,
                videos: game.videos,
                websites: game.websites,
                popularity: game.popularity,
              })
            }
          >
            <Box style={{ marginVertical: 2 }}>
              <FooterBox>
                {game.cover?.image_id ? (
                  <BG
                    resizeMethod="resize"
                    source={{
                      uri: getImage(
                        game.cover.image_id,
                        imageSizeObj._720p1280x720
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
