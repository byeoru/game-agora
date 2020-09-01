import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { igdbApi } from "../../api";
import { getDayAgoNowSec } from "../../utils";

export default () => {
  const [home, setHome] = useState({
    firstLoading: true,
    loading: true,
    highRating: [],
    popularPc: [],
    popularAndroid: [],
    popularIos: [],
  });
  const getData = async () => {
    const [homeQuery, homeQueryError] = await igdbApi.homeMultiQuery(
      getDayAgoNowSec(200)
    );
    setHome({
      firstLoading: false,
      loading: false,
      highRating: homeQuery[0].result,
      popularPc: homeQuery[1].result,
      popularIos: homeQuery[2].result,
      popularAndroid: homeQuery[3].result,
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return <HomePresenter {...home} />;
};
