import React from "react";
import PropTypes from "prop-types";
import YoutubePlayer from "react-native-youtube-iframe";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
`;

const VideoHorizontal = ({ videoId, height }) => (
  <Container>
    <YoutubePlayer height={height} play={false} videoId={videoId} />
  </Container>
);

VideoHorizontal.propTypes = {
  videoId: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default VideoHorizontal;
