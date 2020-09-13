import React from "react";
import PropTypes from "prop-types";
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

const ContentsMore = ({ title, getMoreFnParams, styles }) => {
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

ContentsMore.propTypes = {
  title: PropTypes.string.isRequired,
  getMoreFnParams: PropTypes.object.isRequired,
  styles: PropTypes.object,
};

export default ContentsMore;
