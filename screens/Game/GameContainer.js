import React, { useState, useEffect } from "react";
import GamePresenter from "./GamePresenter";
import { igdbApi } from "../../api";
import { getDayAgoNowSec } from "../../utils";

export default () => {
  const [home, setHome] = useState({ loading: true, highRating: [] });
  const getData = async () => {
    const [highRating, highRatingError] = await igdbApi.highRating(
      getDayAgoNowSec(90)
    );
    setHome({ loading: false, highRating });
  };

  useEffect(() => {
    getData();
  }, []);
  return <GamePresenter {...home} />;
};
