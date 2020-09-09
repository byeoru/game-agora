import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";
import { Dimensions } from "react-native";
import RowBox from "../../components/RowBox";
import { Button } from "react-native";

export default ({ loading, showMoreBtn, results, getShowMoreData }) => {
  const { width: WIDTH } = Dimensions.get("window");
  return (
    <ScrollContainer loading={loading}>
      <RowBox
        styles={{
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {results?.length > 0
          ? results.map((game) => {
              return (
                <Vertical
                  key={game.id}
                  id={game.id}
                  title={game.name}
                  backgroundImage={game.background_image}
                  styles={{
                    width: WIDTH / 3.3,
                    height: WIDTH / 2,
                    marginRight: 0,
                    marginBottom: 10,
                  }}
                />
              );
            })
          : null}
      </RowBox>
      {showMoreBtn ? (
        <Button title="더보기" onPress={() => getShowMoreData()} />
      ) : null}
    </ScrollContainer>
  );
};
