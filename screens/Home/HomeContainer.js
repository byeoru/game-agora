import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { rawgApi } from "../../api";
import { getMonthAgoNow } from "../../utils";
import pPlatformsNumObj from "../../obj/pPlatformsNumObj";

export default () => {
  const [home, setHome] = useState({
    firstLoading: true,
    loading: true,
    highRating: [],
    popularPc: [],
    popularIos: [],
    popularAndroid: [],
  });
  const getData = async () => {
    const [
      [highRating, highRatingError],
      [popularPc, popularPcError],
      [popularIos, popularIosError],
      [popularAndroid, popularAndroidError],
    ] = await Promise.all([
      rawgApi.highRating(getMonthAgoNow(3)),
      rawgApi.poNowToThrMonAgo(getMonthAgoNow(3), pPlatformsNumObj.PC),
      rawgApi.poNowToThrMonAgo(getMonthAgoNow(3), pPlatformsNumObj.iOS),
      rawgApi.poNowToThrMonAgo(getMonthAgoNow(3), pPlatformsNumObj.Android),
    ]);
    setHome({
      firstLoading: false,
      loading: false,
      highRating,
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
