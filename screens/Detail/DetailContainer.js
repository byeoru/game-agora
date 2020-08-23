import React, { useLayoutEffect } from "react";
import DetailPresenter from "./DetailPresenter";

export default ({ navigation, route: { params } }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title: params.title });
  });
  return <DetailPresenter {...params} navigation={navigation} />;
};
