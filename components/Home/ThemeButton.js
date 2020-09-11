import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import useMore from "../useMore";
import { HEIGHT } from "../../utils";

const Container = styled.View`
  width: 100%;
  height: ${HEIGHT / 5.5}px;
  margin-bottom: 10px;
  justify-content: flex-end;
  align-items: flex-start;
`;
const BG = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const TextBox = styled.View`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 0.9;
`;
const Text = styled.Text`
  font-size: 30px;
  font-weight: 600;
  color: black;
  text-align: center;
`;

const TagButton = ({ name, backgroundImage }) => {
  const goToMore = useMore({ name });
  return (
    <TouchableOpacity onPress={() => goToMore()}>
      <Container>
        <BG resizeMethod="resize" source={{ uri: backgroundImage }} />
        <TextBox>
          <Text>{name}</Text>
        </TextBox>
      </Container>
    </TouchableOpacity>
  );
};

TagButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TagButton;
