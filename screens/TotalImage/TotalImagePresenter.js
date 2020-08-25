import React from "react";
import styled from "styled-components/native";
import ScrollContainer from "../../components/ScrollContainer";
import ImageHorizontal from "../../components/TotalImage/ImageHorizontal";

export default ({ images }) => (
  <ScrollContainer>
    {images.map((image) => (
      <ImageHorizontal key={image.id} url={image.image_id} />
    ))}
  </ScrollContainer>
);
