import React, { useLayoutEffect, useState, useEffect } from "react";
import MorePresenter from "./MorePresenter";
import { rawgApi } from "../../api";
import { getMonthAgoNow } from "../../utils";

export default ({
  navigation,
  route: {
    params: { id, title, classification },
  },
}) => {
  const [more, setMore] = useState({ loading: true, results: {} });
  const getGenreData = async () => {
    const [
      [orderOfRating, orderOfRatingError],
      [orderOfPopularity, orderOfPopularityError],
      [orderOfDate, orderOfDateError],
    ] = await Promise.all([
      rawgApi.genreOrderOfRating(id, getMonthAgoNow(3)),
      rawgApi.genreOrderOfPopularity(id, getMonthAgoNow(3)),
      rawgApi.genreOrderOfDate(id, getMonthAgoNow(3)),
    ]);
    setMore({
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
      rawgApi.platformOrderOfRating(id, getMonthAgoNow(6)),
      rawgApi.platformOrderOfPopularity(id, getMonthAgoNow(6)),
      rawgApi.platformOrderOfDate(id, getMonthAgoNow(6)),
    ]);
    setMore({
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
  return <MorePresenter {...more} />;
};
