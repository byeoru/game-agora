import React, { useState, useEffect, useLayoutEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { rawgApi } from "../../api";

export default ({ navigation, route: { params } }) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title: params.title });
  });
  return <DetailPresenter {...params} navigation={navigation} />;
};
