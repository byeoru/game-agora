import React from "react";
import ScrollContainer from "../../../components/ScrollContainer";
import ImageHorizontal from "../../../components/GameDetail/SubPage/ImageHorizontal";
import VideoHorizontal from "../../../components/GameDetail/SubPage/VideoHorizontal";
import Papago from "../../../components/GameDetail/SubPage/Papago";

export default ({ classification, contents, textToInsert }) => {
  let categorizedContents;
  switch (classification) {
    case "I":
      categorizedContents = () =>
        contents.map((image) => (
          <ImageHorizontal key={image.id} imageId={image.image_id} />
        ));
      break;
    case "V":
      categorizedContents = () =>
        contents.map((video) => (
          <VideoHorizontal
            key={video.id}
            videoId={video.video_id}
            height={250}
          />
        ));
      break;
    case "P":
      categorizedContents = () => <Papago textToInsert={textToInsert} />;
      break;
  }
  return classification === "P" ? (
    categorizedContents()
  ) : (
    <ScrollContainer>{categorizedContents()}</ScrollContainer>
  );
};
