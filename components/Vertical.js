import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import useDetail from "./useDetail";

const Container = styled.View`
  margin-right: 20px;
  border-radius: 15px;
  align-items: center;
`;
const BG = styled.Image`
  width: 130px;
  height: 180px;
  border-radius: 15px;
`;
const DataContainer = styled.View`
  width: 130px;
  justify-content: space-between;
`;
const Title = styled.Text`
  text-align: center;
`;

export default ({ id, title, backgroundImage, styles }) => {
  const goToDetail = useDetail({ id, title, backgroundImage });
  return (
    <TouchableOpacity onPress={() => goToDetail()}>
      <Container style={{ ...styles }}>
        <DataContainer>
          <Title>{title}</Title>
        </DataContainer>
      </Container>
    </TouchableOpacity>
  );
};
