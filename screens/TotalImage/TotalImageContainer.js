import React, { useLayoutEffect } from "react";
import TotalImagePresenter from "./TotalImagePresenter";

export default ({
  navigation,
  route: {
    params: { title, images },
  },
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, []);
  return <TotalImagePresenter images={images} />;
};
