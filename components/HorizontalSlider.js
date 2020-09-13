import React from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";

const HorizontalSlider = ({ children }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {children}
  </ScrollView>
);

HorizontalSlider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
