import React, { useLayoutEffect, useState, useEffect } from "react";
import GamesOfCategoryPresenter from "./GamesOfCategoryPresenter";
import { rawgApi } from "../../api";
import { getYMDAgoNow } from "../../utils";

export default ({
  navigation,
  route: {
    params: { id, title, classification },
  },
}) => {
  const [gamesOfCategory, setGamesOfCategory] = useState({
    loading: true,
    genreOrPlatforms: {},
    results: {},
  });
  const getGenreData = async () => {
    const [
      [orderOfRating, orderOfRatingError],
      [orderOfPopularity, orderOfPopularityError],
      [orderOfDate, orderOfDateError],
    ] = await Promise.all([
      rawgApi.getGenreOrderOfRatingGames(getYMDAgoNow(100), id, 1),
      rawgApi.getGenreOrderOfPopularityGames(getYMDAgoNow(100), id, 1),
      rawgApi.getGenreOrderOfDateGames(getYMDAgoNow(100), id, 1),
    ]);
    setGamesOfCategory({
      loading: false,
      genreOrPlatformParms: { genres: id },
      results: { orderOfRating, orderOfPopularity, orderOfDate },
    });
  };
  const getPlatformData = async () => {
    const [
      [orderOfRating, orderOfRatingError],
      [orderOfPopularity, orderOfPopularityError],
      [orderOfDate, orderOfDateError],
    ] = await Promise.all([
      rawgApi.getPlatformOrderOfRatingGames(getYMDAgoNow(100), id, 1),
      rawgApi.getPlatformOrderOfPopularityGames(getYMDAgoNow(100), id, 1),
      rawgApi.getPlatformOrderOfDateGames(getYMDAgoNow(100), id, 1),
    ]);
    setGamesOfCategory({
      loading: false,
      genreOrPlatformParms: { platforms: id },
      results: { orderOfRating, orderOfPopularity, orderOfDate },
    });
  };
  const getData = () => {
    switch (classification) {
      case "G":
        getGenreData();
        break;
      case "P":
        getPlatformData();
        break;
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  });
  return <GamesOfCategoryPresenter {...gamesOfCategory} title={title} />;
};
