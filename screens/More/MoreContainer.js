import React, { useLayoutEffect } from "react";
import MorePresenter from "./MorePresenter";

export default ({
  navigation,
  route: {
    params: { name: title },
  },
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  });
  return <MorePresenter />;
};
