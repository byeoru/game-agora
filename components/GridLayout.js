import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { getImage } from "../api";
import imageSizeObj from "../obj/imageSizeObj";
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
  margin: 2px 0px;
`;

export default ({ styles, children }) => {
  const goToDetail = useGameDetail();
  return (
    <Container style={{ ...styles }}>
      <HeaderGrid>
        <LeftColumn>
          <TouchableOpacity
            onPress={() =>
              goToDetail({
                title: children[0].name,
                rating: children[0].rating,
                criticRating: children[0].aggregated_rating,
                totalRating: children[0].total_rating,
                firstReleaseD: children[0].first_release_date,
                platforms: children[0].platforms,
                backgroundImage: children[0].cover?.image_id,
                involvedCompanies: children[0].involved_companies,
                genres: children[0].genres,
                summary: children[0].summary,
                storyline: children[0].storyline,
                screenshots: children[0].screenshots,
                artworks: children[0].artworks,
                videos: children[0].videos,
                websites: children[0].websites,
                popularity: children[0].popularity,
              })
            }
          >
            {children[0]?.cover?.image_id ? (
              <BG
                resizeMethod="resize"
                source={{
                  uri: getImage(
                    children[0].cover.image_id,
                    imageSizeObj._720p1280x720
                  ),
                }}
              />
            ) : null}
          </TouchableOpacity>
        </LeftColumn>
        <RightColumn>
          <RightTopRow>
            <TouchableOpacity
              onPress={() =>
                goToDetail({
                  title: children[1].name,
                  rating: children[1].rating,
                  criticRating: children[1].aggregated_rating,
                  totalRating: children[1].total_rating,
                  firstReleaseD: children[1].first_release_date,
                  platforms: children[1].platforms,
                  backgroundImage: children[1].cover?.image_id,
                  involvedCompanies: children[1].involved_companies,
                  genres: children[1].genres,
                  summary: children[1].summary,
                  storyline: children[1].storyline,
                  screenshots: children[1].screenshots,
                  artworks: children[1].artworks,
                  videos: children[1].videos,
                  websites: children[1].websites,
                  popularity: children[1].popularity,
                })
              }
            >
              {children[1]?.cover?.image_id ? (
                <BG
                  resizeMethod="resize"
                  source={{
                    uri: getImage(
                      children[1].cover.image_id,
                      imageSizeObj._720p1280x720
                    ),
                  }}
                />
              ) : null}
            </TouchableOpacity>
          </RightTopRow>
          <RightBottomRow>
            <RightBottomRowLeftColumn>
              <TouchableOpacity
                onPress={() =>
                  goToDetail({
                    title: children[2].name,
                    rating: children[2].rating,
                    criticRating: children[2].aggregated_rating,
                    totalRating: children[2].total_rating,
                    firstReleaseD: children[2].first_release_date,
                    platforms: children[2].platforms,
                    backgroundImage: children[2].cover?.image_id,
                    involvedCompanies: children[2].involved_companies,
                    genres: children[2].genres,
                    summary: children[2].summary,
                    storyline: children[2].storyline,
                    screenshots: children[2].screenshots,
                    artworks: children[2].artworks,
                    videos: children[2].videos,
                    websites: children[2].websites,
                    popularity: children[2].popularity,
                  })
                }
              >
                {children[2]?.cover?.image_id ? (
                  <BG
                    resizeMethod="resize"
                    source={{
                      uri: getImage(
                        children[2].cover.image_id,
                        imageSizeObj._720p1280x720
                      ),
                    }}
                  />
                ) : null}
              </TouchableOpacity>
            </RightBottomRowLeftColumn>
            <RightBottomRowRightColumn>
              <TouchableOpacity
                onPress={() =>
                  goToDetail({
                    title: children[3].name,
                    rating: children[3].rating,
                    criticRating: children[3].aggregated_rating,
                    totalRating: children[3].total_rating,
                    firstReleaseD: children[3].first_release_date,
                    platforms: children[3].platforms,
                    backgroundImage: children[3].cover?.image_id,
                    involvedCompanies: children[3].involved_companies,
                    genres: children[3].genres,
                    summary: children[3].summary,
                    storyline: children[3].storyline,
                    screenshots: children[3].screenshots,
                    artworks: children[3].artworks,
                    videos: children[3].videos,
                    websites: children[3].websites,
                    popularity: children[3].popularity,
                  })
                }
              >
                {children[3]?.cover?.image_id ? (
                  <BG
                    resizeMethod="resize"
                    source={{
                      uri: getImage(
                        children[3].cover.image_id,
                        imageSizeObj._720p1280x720
                      ),
                    }}
                  />
                ) : null}
              </TouchableOpacity>
            </RightBottomRowRightColumn>
          </RightBottomRow>
        </RightColumn>
      </HeaderGrid>
      <FooterGrid>
        {children.map((game, index) => {
          if (index < 4) return null;
          return (
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
            </TouchableOpacity>
          );
        })}
      </FooterGrid>
    </Container>
  );
};
