import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
`;

export default ({ rating, criticRating, totalRating }) => {
  const ratingConv = rating ? Math.floor(rating) / 100 : 0;
  const criticRatingConv = criticRating ? Math.floor(criticRating) / 100 : 0;
  const totalRatingConv = totalRating ? Math.floor(totalRating) / 100 : 0;
  return (
    <Container>
      <ProgressChart
        data={{
          labels: [
            rating ? "유저" : "유저 N/A",
            criticRating ? "비평가" : "비평가 N/A",
            totalRating ? "종합" : "종합 N/A",
          ], // optional
          data: [ratingConv, criticRatingConv, totalRatingConv],
        }}
        width={Dimensions.get("window").width / 1.04} // from react-native
        height={200}
        strokeWidth={5}
        radius={38}
        chartConfig={{
          backgroundGradientFrom: "#005C97",
          backgroundGradientTo: "#363795",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, 1)`,
        }}
        style={{
          borderRadius: 15,
        }}
        hideLegend={false}
      />
    </Container>
  );
};
