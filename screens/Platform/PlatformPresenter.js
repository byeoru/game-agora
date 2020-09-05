import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import PlatformButton from "../../components/Platform/PlatformButton";
import OriginNotation from "../../components/OriginNotation";
import ContentsBox from "../../components/ContentsBox";
import RowBox from "../../components/RowBox";

export default ({ loading, listOfPlatforms }) => {
  return (
    <ScrollContainer loading={loading}>
      <ContentsBox styles={{ paddingTop: 20, marginTop: 10 }}>
        <RowBox styles={{ flexWrap: "wrap", justifyContent: "space-between" }}>
          {listOfPlatforms?.length > 0
            ? listOfPlatforms.map((platform) => (
                <PlatformButton
                  key={platform.id}
                  id={platform.id}
                  title={platform.name}
                  backgroundImage={platform.image_background}
                />
              ))
            : null}
        </RowBox>
      </ContentsBox>
      <OriginNotation />
    </ScrollContainer>
  );
};
