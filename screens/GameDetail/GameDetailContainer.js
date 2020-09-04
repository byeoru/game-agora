import React, { useLayoutEffect, useState, useEffect } from "react";
import GameDetailPresenter from "./GameDetailPresenter";
import { rawgApi } from "../../api";

export default ({
  navigation,
  route: {
    params: { id, title, backgroundImage },
  },
}) => {
  const [gameDetail, setGameDetail] = useState({
    loading: true,
    title,
    backgroundImage,
    rating: null,
    released: null,
  });
  const getData = async () => {
    const [
      [detail, detailError],
      [screenshots, screenshotsError],
    ] = await Promise.all([
      rawgApi.detailsOfTheGame(id),
      rawgApi.screenshots(id),
    ]);
    setGameDetail({
      loading: false,
      title: detail.name,
      backgroundImage: detail.background_image,
      rating: detail.rating,
      ratingTop: detail.rating_top,
      released: detail.released,
      genres: detail.genres,
      platforms: detail.platforms,
      description: detail.description_raw,
      video: detail.clip?.video,
      screenshots,
      developers: detail.developers,
      publishers: detail.publishers,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  });
  return <GameDetailPresenter {...gameDetail} navigation={navigation} />;
};
