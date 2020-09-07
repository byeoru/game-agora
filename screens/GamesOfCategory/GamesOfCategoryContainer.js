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
    results: {},
  });
  const getGenreData = async () => {
    const [
      [orderOfRating, orderOfRatingError],
      [orderOfPopularity, orderOfPopularityError],
      [orderOfDate, orderOfDateError],
    ] = await Promise.all([
      rawgApi.getGenreOrderOfRating(getYMDAgoNow(100), id, 1),
      rawgApi.getGenreOrderOfPopularity(getYMDAgoNow(100), id, 1),
      rawgApi.getGenreOrderOfDate(getYMDAgoNow(100), id, 1),
    ]);
    setGamesOfCategory({
      loading: false,
      results: { orderOfRating, orderOfPopularity, orderOfDate },
    });
  };
  const getPlatformData = async () => {
    const [
      [orderOfRating, orderOfRatingError],
      [orderOfPopularity, orderOfPopularityError],
      [orderOfDate, orderOfDateError],
    ] = await Promise.all([
      rawgApi.getPlatformOrderOfRating(getYMDAgoNow(100), id, 1),
      rawgApi.getPlatformOrderOfPopularity(getYMDAgoNow(100), id, 1),
      rawgApi.getPlatformOrderOfDate(getYMDAgoNow(100), id, 1),
    ]);
    setGamesOfCategory({
      loading: false,
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
