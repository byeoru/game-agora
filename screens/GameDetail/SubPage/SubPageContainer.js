import React, { useLayoutEffect } from "react";
import SubPagePresenter from "./SubPagePresenter";

export default ({
  navigation,
  route: {
    params: { title, classification, contents, textToInsert },
  },
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, []);
  return (
    <SubPagePresenter
      classification={classification}
      contents={contents}
      textToInsert={textToInsert}
    />
  );
};
