import React from "react";
import { ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
`;

export default ({ rating, ratingTop }) => {
  const ratingConv = rating ? rating * 0.2 : 0;
  const ratingTopConv = ratingTop ? ratingTop * 0.2 : 0;
  return (
    <Container>
      <ProgressChart
        data={{
          labels: [
            rating ? `평점: ${rating} / 5` : "평점 N/A",
            ratingTopConv ? `최고점: ${ratingTop} / 5` : "최고점 N/A",
          ], // optional
          data: [ratingConv, ratingTopConv],
        }}
        width={Dimensions.get("window").width / 1.04} // from react-native
        height={180}
        strokeWidth={5}
        radius={38}
        chartConfig={{
          backgroundGradientFrom: "#005C97",
          backgroundGradientTo: "#363795",
          color: (opacity = 1) => `rgba(200, 200, 200, ${opacity})`,
          labelColor: () => `rgba(255, 255, 255, 1)`,
        }}
        style={{
          borderRadius: 15,
        }}
        hideLegend={true}
      />
    </Container>
  );
};
