import React, { useState, useEffect } from "react";
import PlatformPresenter from "./PlatformPresenter";
import { rawgApi } from "../../api";

export default () => {
  const [platform, setPlatform] = useState({
    loading: true,
    listOfPlatforms: [],
  });
  const getData = async () => {
    const [
      listOfPlatforms,
      listOfPlatformsError,
    ] = await rawgApi.listOfPlatforms();
    setPlatform({ loading: false, listOfPlatforms });
  };
  useEffect(() => {
    getData();
  }, []);
  return <PlatformPresenter {...platform} />;
};
