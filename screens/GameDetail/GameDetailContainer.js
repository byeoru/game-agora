import React, { useLayoutEffect } from "react";
import GameDetailPresenter from "./GameDetailPresenter";

export default ({ navigation, route: { params } }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title: params.title });
  });
  return <GameDetailPresenter {...params} navigation={navigation} />;
};
