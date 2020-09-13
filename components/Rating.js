import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const Text = styled.Text``;

const Rating = ({ rating, styles }) => {
  return <Text style={{ fontSize: 15, ...styles }}>🏆 {rating} / 5</Text>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  styles: PropTypes.object,
};

export default Rating;
