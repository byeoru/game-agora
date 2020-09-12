import React from "react";
import PropTypes from "prop-types";
import { BarChart } from "react-native-chart-kit";
import styled from "styled-components/native";
import { WIDTH } from "../../utils";
import i18n from "i18n-js";

const Container = styled.View`
  align-items: center;
`;

const BarCharts = ({ ratings }) => {
  const labels = ratings.map((rating) => {
    switch (rating.title) {
      case "exceptional":
        return `${i18n.t("exceptional")}`;
      case "recommended":
        return `${i18n.t("recommended")}`;
      case "meh":
        return `${i18n.t("meh")}`;
      case "skip":
        return `${i18n.t("skip")}`;
    }
  });
  const data = ratings.map((rating) => rating.percent);
  return (
    <Container>
      <BarChart
        width={WIDTH / 1.04} // from react-native
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

BarChart.propTypes = {
  ratings: PropTypes.array,
};

export default BarCharts;
