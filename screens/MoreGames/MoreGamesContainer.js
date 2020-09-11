import React, { useLayoutEffect, useEffect, useState } from "react";
import MoreGamesPresenter from "./MoreGamesPresenter";
import { rawgApi, cancelLoading } from "../../api";
import { AdMobRewarded } from "expo-ads-admob";

export default ({
  navigation,
  route: {
    params: {
      title,
      contentsBoxTitle,
      dates,
      genres,
      parent_platforms,
      platforms,
      ordering,
      page,
      page_size,
    },
  },
}) => {
  const [moreGames, setmoreGames] = useState({
    loading: true,
    results: [],
  });
  const [moreLoading, setMoreLoading] = useState(false);
  const [pageNum, setPageNum] = useState(page);
  const getShowMoreData = async () => {
    const [showMoreData, showMoreDataError] = await rawgApi.getMoreGames(
      dates,
      genres,
      parent_platforms,
      platforms,
      ordering,
      pageNum,
      page_size
    );
    setMoreLoading(false);
    setmoreGames({
      showMoreBtn:
        !showMoreData || showMoreData.length < page_size ? false : true,
      results: moreGames.results.concat(showMoreData),
    });
    setPageNum(pageNum + 1);
  };
  const getData = async () => {
    const [moreData, moreDataError] = await rawgApi.getMoreGames(
      dates,
      genres,
      parent_platforms,
      platforms,
      ordering,
      pageNum,
      page_size
    );
    setmoreGames({
      loading: false,
      showMoreBtn: !moreData || moreData.length < page_size ? false : true,
      results: moreData,
    });
    setPageNum(pageNum + 1);
  };
  useEffect(() => {
    getData();
    return () => {
      AdMobRewarded.removeAllListeners();
      cancelLoading();
    };
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, []);
  return (
    <MoreGamesPresenter
      {...moreGames}
      getShowMoreData={getShowMoreData}
      contentsBoxTitle={contentsBoxTitle}
      moreLoading={moreLoading}
      setMoreLoading={setMoreLoading}
      pageNum={pageNum}
    />
  );
};
