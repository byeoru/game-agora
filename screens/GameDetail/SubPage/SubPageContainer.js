import React, { useLayoutEffect } from "react";
import SubPagePresenter from "./SubPagePresenter";

export default ({
  navigation,
  route: {
    params: { title, Classification, contents },
  },
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, []);
  return (
    <SubPagePresenter Classification={Classification} contents={contents} />
  );
};
