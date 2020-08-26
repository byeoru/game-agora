import axios from "axios";
import getEnvVars from "./env";
import { getNowSec } from "./utils";
const { API_KEY } = getEnvVars();

const makeRequestIgdb = (path, query) =>
  axios({
    url: `https://api-v3.igdb.com${path}`,
    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": API_KEY,
    },
    data: query,
  });

const getAnythingIgdb = async (path, query) => {
  try {
    const { data } = await makeRequestIgdb(path, query);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};

export const igdbApi = {
  highRating: (previousDate) =>
    getAnythingIgdb(
      "/games",
      `fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks.image_id,bundles,category,checksum,
      collection,cover.image_id,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,
      game_modes,genres.name,hypes,involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,
      keywords,multiplayer_modes,name,parent_game,platforms.abbreviation,platforms.name,player_perspectives,popularity,
      pulse_count,rating,rating_count,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,
      summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.video_id,websites; 
      where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & rating > 70; sort rating desc; limit 10;`
    ),
  popular: (previousDate, platform) =>
    getAnythingIgdb(
      "/games",
      `fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks.image_id,bundles,category,checksum,
      collection,cover.image_id,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,
      game_modes,genres.name,hypes,involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,
      keywords,multiplayer_modes,name,parent_game,platforms.abbreviation,platforms.name,player_perspectives,popularity,
      pulse_count,rating,rating_count,screenshots.*,similar_games,slug,standalone_expansions,status,storyline,
      summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.video_id,websites; 
      where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & platforms.abbreviation = "${platform}"; 
      sort popularity desc; limit 10;`
    ),
};

const makeRequestRawg = (path, params) =>
  axios.get(`https://api.rawg.io/api${path}`, {
    params: { ...params },
    headers: { appName: "GameAgora", user: "byeoru" },
  });

const getAnythingRawg = async (path, params = {}) => {
  try {
    const {
      data,
      data: { results },
    } = await makeRequestRawg(path, params);
    return [results || data, null];
  } catch (error) {
    return [null, error];
  }
};

export const rawgApi = {
  highRating6M: (dates) =>
    getAnythingRawg("/games", {
      dates,
      page_size: 10,
      ordering: "-rating",
    }),
  poThisMonth: (dates, parentPlatform) =>
    getAnythingRawg("/games", {
      dates,
      page_size: 10,
      ordering: "-added",
      parent_platforms: `${parentPlatform}`,
    }),
  poNowToThrMonAgo: (dates, parentPlatform) =>
    getAnythingRawg("/games", {
      dates,
      page_size: 10,
      ordering: "-added",
      parent_platforms: `${parentPlatform}`,
    }),
  platforms: () => getAnythingRawg("/platforms"),
  platformsParent: () => getAnythingRawg("/platforms/lists/parents"),
  listOfTags: () => getAnythingRawg("/tags"),
  detailsOfTheGame: (id) => getAnythingRawg(`/games/${id}`),
};

export const getImage = (imageId, size) =>
  `https://images.igdb.com/igdb/image/upload/t_${size}/${imageId}.jpg`;
