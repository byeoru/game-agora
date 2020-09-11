import axios from "axios";
import getEnvVars from "./env";
import { getNowSec } from "./utils";
import gameGenreObj from "./obj/gameGenreObj";
const { API_KEY } = getEnvVars();
const CancelToken = axios.CancelToken;

export let cancelLoading;

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
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & rating > 60; sort rating desc; limit 15;
      };
      query games "popular PC" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & platforms.abbreviation = "PC"; 
        sort popularity desc; limit 15;
      };
      query games "popular iOS" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & platforms.abbreviation = "iOS"; 
        sort popularity desc; limit 15;
      };
      query games "popular Android" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & platforms.abbreviation = "Android"; 
        sort popularity desc; limit 15;
      };`
    ),
  genreRatingMultiQuery: (previousDate) =>
    getAnythingIgdb(
      "/multiquery",
      `query games "point and click" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.PointAndClick
      }" & rating > 60; 
        sort rating desc; limit 10;
      };
      query games "fighting" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Fighting
      }" & rating > 60; 
        sort rating desc; limit 10;      
      };
      query games "shooter" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Shooter
      }" & rating > 60; 
        sort rating desc; limit 10;      
      };
      query games "music" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Music
      }" & rating > 60; 
        sort rating desc; limit 10;      
      };
      query games "platform" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Platform
      }" & rating > 60; 
        sort rating desc; limit 10;      
      };
      query games "puzzle" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Puzzle
      }" & rating > 60; 
        sort rating desc; limit 10;      
      };
      query games "racing" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Racing
      }" & rating > 60; 
        sort rating desc; limit 10;      
      };
      query games "RTS" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.RTS
      }" & rating > 60; 
        sort rating desc; limit 10;      
      };
      query games "RPG" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.RPG
      }" & rating > 60; 
        sort rating desc; limit 10;      
      };
      query games "simulator" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Simulator
      }" & rating > 60; 
        sort rating desc; limit 10;      
      };`
    ),
  genrePopularityMultiQuery: (previousDate) =>
    getAnythingIgdb(
      "/multiquery",
      `query games "point and click" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.PointAndClick
      }"; 
        sort popularity desc; limit 10;
      };
      query games "fighting" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Fighting
      }"; 
        sort popularity desc; limit 10;      
      };
      query games "shooter" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Shooter
      }"; 
        sort popularity desc; limit 10;      
      };
      query games "music" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Music
      }"; 
        sort popularity desc; limit 10;      
      };
      query games "platform" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Platform
      }"; 
        sort popularity desc; limit 10;      
      };
      query games "puzzle" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Puzzle
      }"; 
        sort popularity desc; limit 10;      
      };
      query games "racing" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Racing
      }"; 
        sort popularity desc; limit 10;      
      };
      query games "RTS" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.RTS
      }"; 
        sort popularity desc; limit 10;      
      };
      query games "RPG" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.RPG
      }"; 
        sort popularity desc; limit 10;      
      };
      query games "simulator" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Simulator
      }"; 
        sort popularity desc; limit 10;      
      };`
    ),
  genreDateMultiQuery: (previousDate) =>
    getAnythingIgdb(
      "/multiquery",
      `query games "point and click" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.PointAndClick
      }"; 
        sort first_release_date desc; limit 10;
      };
      query games "fighting" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Fighting
      }"; 
        sort first_release_date desc; limit 10;      
      };
      query games "shooter" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Shooter
      }"; 
        sort first_release_date desc; limit 10;      
      };
      query games "music" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Music
      }"; 
        sort first_release_date desc; limit 10;      
      };
      query games "platform" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Platform
      }"; 
        sort first_release_date desc; limit 10;      
      };
      query games "puzzle" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Puzzle
      }"; 
        sort first_release_date desc; limit 10;      
      };
      query games "racing" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Racing
      }"; 
        sort first_release_date desc; limit 10;      
      };
      query games "RTS" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.RTS
      }"; 
        sort first_release_date desc; limit 10;      
      };
      query games "RPG" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.RPG
      }"; 
        sort first_release_date desc; limit 10;      
      };
      query games "simulator" {
        fields aggregated_rating,aggregated_rating_count,artworks.image_id,cover.image_id,created_at,dlcs,first_release_date,genres.name,
        involved_companies.*,involved_companies.company.name,involved_companies.company.logo.image_id,name,platforms.abbreviation,
        platforms.name,popularity,rating,rating_count,screenshots.image_id,storyline,summary,time_to_beat,total_rating,
        total_rating_count,videos.video_id,websites.url,websites.category;  
        where first_release_date >= ${previousDate} & first_release_date < ${getNowSec()} & genres.name = "${
        gameGenreObj.Simulator
      }"; 
        sort first_release_date desc; limit 10;      
      };`
    ),
  genre: () => getAnythingIgdb("/genres", `fields name; limit 30;`),
  platform: () =>
    getAnythingIgdb(
      "/platforms",
      `fields name,abbreviation,alternative_name; limit 30;`
    ),
};

const makeRequestRawg = (path, params) =>
  axios.get(`https://api.rawg.io/api${path}`, {
    cancelToken: new CancelToken((c) => {
      cancelLoading = c;
    }),
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
  getHighRatingGames: (dates) =>
    getAnythingRawg("/games", {
      dates,
      page_size: 15,
      ordering: "-rating",
    }),
  getNewWorkGames: (dates, page, page_size = 12) =>
    getAnythingRawg("/games", {
      dates,
      page,
      page_size,
      ordering: "-released",
    }),
  getPopularGames: (dates, parent_platforms, page, page_size = 12) =>
    getAnythingRawg("/games", {
      dates,
      page,
      page_size,
      ordering: "-added",
      parent_platforms,
    }),
  getGenreOrderOfRatingGames: (dates, genres, page, page_size = 10) =>
    getAnythingRawg(`/games`, {
      dates,
      page,
      page_size,
      genres,
      ordering: "-rating",
    }),
  getGenreOrderOfPopularityGames: (dates, genres, page, page_size = 10) =>
    getAnythingRawg(`/games`, {
      dates,
      page,
      page_size,
      genres,
      ordering: "-added",
    }),
  getGenreOrderOfDateGames: (dates, genres, page, page_size = 10) =>
    getAnythingRawg(`/games`, {
      dates,
      page,
      page_size,
      genres,
      ordering: "-released",
    }),
  getPlatformOrderOfRatingGames: (dates, platforms, page, page_size = 10) =>
    getAnythingRawg(`/games`, {
      dates,
      page,
      page_size,
      platforms,
      ordering: "-rating",
    }),
  getPlatformOrderOfPopularityGames: (dates, platforms, page, page_size = 10) =>
    getAnythingRawg(`/games`, {
      dates,
      page,
      page_size,
      platforms,
      ordering: "-addedg",
    }),
  getPlatformOrderOfDateGames: (dates, platforms, page, page_size = 10) =>
    getAnythingRawg(`/games`, {
      dates,
      page,
      page_size,
      platforms,
      ordering: "-released",
    }),
  getMoreGames: (
    dates,
    genres = null,
    parent_platforms = null,
    platforms = null,
    ordering,
    page,
    page_size
  ) =>
    getAnythingRawg(`/games`, {
      dates,
      page,
      page_size,
      genres,
      parent_platforms,
      platforms,
      ordering,
    }),
  getScreenshots: (id) => getAnythingRawg(`/games/${id}/screenshots`),
  getPlatforms: () => getAnythingRawg("/platforms"),
  getListOfPlatformsParent: () => getAnythingRawg("/platforms/lists/parents"),
  getListOfGenres: () => getAnythingRawg("/genres"),
  getListOfTags: () => getAnythingRawg("/tags"),
  getListOfPlatforms: () => getAnythingRawg("/platforms"),
  getDetailsOfTheGame: (id) => getAnythingRawg(`/games/${id}`),
};

export const getIgdbImg = (imageId, size) =>
  `https://images.igdb.com/igdb/image/upload/t_${size}/${imageId}.jpg`;

export const getRawgImg = (imgUrl, size) =>
  `https://media.rawg.io/media/resize/${size}/-${imgUrl.split("media")[2]}`;
