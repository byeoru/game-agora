import React, { useState, useEffect } from "react";
import GenrePresenter from "./GenrePresenter";
import { rawgApi } from "../../api";

export default () => {
  const [genre, setGenre] = useState({ loading: true, listOfGenres: [] });
  const getData = async () => {
    const [listOfGenres, listOfGenresError] = await rawgApi.listOfGenres();
    setGenre({ loading: false, listOfGenres });
  };
  useEffect(() => {
    getData();
  }, []);
  return <GenrePresenter {...genre} />;
};
