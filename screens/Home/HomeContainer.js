import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { rawgApi } from "../../api";
import { getYMDAgoNow } from "../../utils";
import pPlatformsNumObj from "../../obj/pPlatformsNumObj";

export default () => {
  const [home, setHome] = useState({
    firstLoading: true,
    loading: true,
    highRating: [],
    newWork: [],
    popularPc: [],
    popularIos: [],
    popularAndroid: [],
  });
  const getData = async () => {
    const [
      [highRating, highRatingError],
      [newWork, newWorkError],
      [popularPc, popularPcError],
      [popularIos, popularIosError],
      [popularAndroid, popularAndroidError],
    ] = await Promise.all([
      rawgApi.getHighRatingGames(getYMDAgoNow(100)),
      rawgApi.getNewWorkGames(getYMDAgoNow(7), 1),
      rawgApi.getPopularGames(getYMDAgoNow(100), pPlatformsNumObj.PC, 1),
      rawgApi.getPopularGames(getYMDAgoNow(100), pPlatformsNumObj.iOS, 1),
      rawgApi.getPopularGames(getYMDAgoNow(100), pPlatformsNumObj.Android, 1),
    ]);
    setHome({
      firstLoading: false,
      loading: false,
      highRating,
      newWork,
      popularPc,
      popularIos,
      popularAndroid,
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return <HomePresenter {...home} />;
};
