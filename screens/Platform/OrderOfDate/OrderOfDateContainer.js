import React, { useState, useEffect } from "react";
import TopNavSharingPresenter from "../TopNavSharingPresenter";
import { igdbApi } from "../../../api";
import { getDayAgoNowSec } from "../../../utils";

export default () => {
  const [orderOfDate, setOrderOfDate] = useState({
    loading: true,
    PointAndClick: [],
    Fighting: [],
    Shooter: [],
    Music: [],
    Platform: [],
    Puzzle: [],
    Racing: [],
    RTS: [],
    RPG: [],
    Simulator: [],
  });
  const getData = async () => {
    const [
      orderOfRatingQuery,
      orderOfRatingError,
    ] = await igdbApi.genreDateMultiQuery(getDayAgoNowSec(200));
    setOrderOfDate({
      loading: false,
      PointAndClick: orderOfRatingQuery[0].result,
      Fighting: orderOfRatingQuery[1].result,
      Shooter: orderOfRatingQuery[2].result,
      Music: orderOfRatingQuery[3].result,
      Platform: orderOfRatingQuery[4].result,
      Puzzle: orderOfRatingQuery[5].result,
      Racing: orderOfRatingQuery[6].result,
      RTS: orderOfRatingQuery[7].result,
      RPG: orderOfRatingQuery[8].result,
      Simulator: orderOfRatingQuery[9].result,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <TopNavSharingPresenter {...orderOfDate} />;
};
