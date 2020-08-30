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
  homeMultiQuery: (previousDate) =>
    getAnythingIgdb(
      "/multiquery",
      `query games "highRating" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category; 
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & rating > 70; sort rating desc; limit 10;
      };
      query games "popular PC" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & platforms.abbreviation = "PC"; 
        sort popularity desc; limit 10;
      };
      query games "popular iOS" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & platforms.abbreviation = "iOS"; 
        sort popularity desc; limit 10;
      };
      query games "popular Android" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & platforms.abbreviation = "Android"; 
        sort popularity desc; limit 10;
      };
      query themes "themes" {
        fields checksum,created_at,name,slug,updated_at,url;
      };`
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
