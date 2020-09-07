import React, { useLayoutEffect } from "react";
import MoreGamesPresenter from "./MoreGamesPresenter";

export default ({
  navigation,
  route: {
    params: { title },
  },
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, []);
  return <MoreGamesPresenter />;
};
