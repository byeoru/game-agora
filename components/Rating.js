import React from "react";
import styled from "styled-components/native";

const Text = styled.Text``;

export default ({ rating, styles }) => {
  return <Text style={{ fontSize: 15, ...styles }}>🏆 {rating} / 5</Text>;
};
