import React from "react";
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
`;

export default ({ ratings }) => {
  const labels = ratings.map((rating) => {
    switch (rating.title) {
      case "exceptional":
        return `매우 만족: ${rating.count}명`;
      case "recommended":
        return `만족: ${rating.count}명`;
      case "meh":
        return `관심 없음: ${rating.count}명`;
      case "skip":
        return `스킵: ${rating.count}명`;
    }
  });
  const data = ratings.map((rating) => rating.percent);
  return (
    <Container>
      <BarChart
        width={Dimensions.get("window").width / 1.04} // from react-native
        style={{
          borderRadius: 15,
        }}
        chartConfig={{
          backgroundGradientFrom: "#005C97",
          backgroundGradientTo: "#363795",
          color: (opacity = 1) => `rgba(200, 200, 200, ${opacity})`,
          labelColor: () => `rgba(255, 255, 255, 1)`,
        }}
        data={{
          labels,
          datasets: [
            {
              data,
            },
          ],
        }}
        height={220}
        fromZero={true}
        showValuesOnTopOfBars={true}
        yAxisSuffix="%"
      />
    </Container>
  );
};
