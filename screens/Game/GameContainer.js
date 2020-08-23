import React, { useState, useEffect } from "react";
import GamePresenter from "./GamePresenter";
import { igdbApi } from "../../api";
import { getDayAgoNowSec } from "../../utils";

export default () => {
  const [home, setHome] = useState({
    loading: true,
    highRating: [],
    popularPc: [],
    popularAndroid: [],
    popularIos: [],
  });
  const getData = async () => {
    const [highRating, highRatingError] = await igdbApi.highRating(
      getDayAgoNowSec(90)
    );
    const [popularPc, popularPcError] = await igdbApi.popular(
      getDayAgoNowSec(90),
      "PC"
    );
    const [popularAndroid, popularAndroidError] = await igdbApi.popular(
      getDayAgoNowSec(90),
      "Android"
    );
    const [popularIos, popularIosError] = await igdbApi.popular(
      getDayAgoNowSec(90),
      "iOS"
    );
    setHome({
      loading: false,
      highRating,
      popularPc,
      popularAndroid,
      popularIos,
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return <GamePresenter {...home} />;
};
