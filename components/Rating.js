import React from "react";
import styled from "styled-components/native";

const Text = styled.Text``;

export default ({ rating, styles }) => {
  const floor = Math.floor(rating);
  return <Text style={{ fontSize: 15, ...styles }}>🏆 {floor}%</Text>;
};
