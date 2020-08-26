import React from "react";
import ScrollContainer from "../../../components/ScrollContainer";
import ImageHorizontal from "../../../components/GameDetail/SubPage/ImageHorizontal";
import VideoHorizontal from "../../../components/GameDetail/SubPage/VideoHorizontal";
import Papago from "../../../components/GameDetail/SubPage/Papago";

export default ({ Classification, contents }) => {
  let CategorizedContents;
  switch (Classification) {
    case "I":
      CategorizedContents = () =>
        contents.map((image) => (
          <ImageHorizontal key={image.id} imageId={image.image_id} />
        ));
      break;
    case "V":
      CategorizedContents = () =>
        contents.map((video) => (
          <VideoHorizontal
            key={video.id}
            videoId={video.video_id}
            height={250}
          />
        ));
      break;
    case "P":
      CategorizedContents = () => <Papago />;
      break;
  }
  return <ScrollContainer>{CategorizedContents()}</ScrollContainer>;
};
