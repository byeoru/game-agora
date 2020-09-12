import React from "react";
import styled from "styled-components/native";
import useMoreGames from "./useMoreGames";
import i18n from "i18n-js";

const TouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  top: -5px;
  right: 5px;
  background-color: white;
  border: 1px;
  border-radius: 6px;
`;
const Text = styled.Text`
  text-align: center;
  padding: 3px;
`;

export default ({ title, getMoreFnParams, styles }) => {
  const goToMoreGames = useMoreGames();
  return (
    <TouchableOpacity
      onPress={() => goToMoreGames({ title, ...getMoreFnParams })}
      style={{ ...styles }}
    >
      <Text>{i18n.t("more")}</Text>
    </TouchableOpacity>
  );
};
