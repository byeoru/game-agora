import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
`;

export default ({ videoId, height }) => (
  <Container>
    <YoutubePlayer height={height} play={false} videoId={videoId} />
  </Container>
);
