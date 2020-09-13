import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import GenreButton from "../../components/Genre/GenreButton";
import OriginNotation from "../../components/OriginNotation";
import ContentsBox from "../../components/ContentsBox";

export default ({ loading, listOfGenres }) => {
  return (
    <ScrollContainer loading={loading}>
      <ContentsBox styles={{ paddingTop: 20, marginTop: 10 }}>
        {listOfGenres.map((genre) => (
          <GenreButton
            key={genre.id}
            id={genre.id}
            title={genre.name}
            backgroundImage={genre.image_background}
          />
        ))}
      </ContentsBox>
      <OriginNotation />
    </ScrollContainer>
  );
};
