import React from "react";
import styled from "styled-components/native";
import Constants from "expo-constants";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, Animated } from "react-native";
import { HEIGHT, WIDTH } from "../../utils";

const boxHeight = HEIGHT - 410;

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: white;
`;

const Logo = styled.Image`
  width: 300px;
  height: 300px;
`;
const List = styled.View`
  width: 100%;
  height: ${boxHeight}px;
  position: absolute;
  top: 0px;
  bottom: 55px;
  padding: 30px 2px 20px 22px;
  border-radius: 20px;
  background-color: rgba(10, 10, 20, 0.1);
  justify-content: space-between;
`;
const Footer = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SubPage = styled.View`
  width: 100%;
  height: ${boxHeight}px;
  position: absolute;
  top: 0px;
  bottom: 55px;
  padding: 10px 32px 30px 10px;
  margin-left: ${WIDTH + 20}px;
  border-radius: 20px;
  background-color: rgba(10, 10, 20, 0.1); ;
`;
const SubHeader = styled.View`
  width: 100%;
  height: 30px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const SubMain = styled.View`
  width: 100%;
  margin-top: 20px;
`;
const ItemContainer = styled.View`
  width: 100%;
`;
const Item = styled.View`
  width: 100%;
  height: 45px;
  border-left-width: 1px;
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 7px;
  margin-bottom: 5px;
  border-radius: 10px;
`;
const Title = styled.Text`
  font-size: 17px;
`;
const Text = styled.Text`
  font-size: 15px;
`;

export default () => {
  let movedToSub = false;
  const value = new Animated.Value(movedToSub ? WIDTH : 20);
  const moveContainer = () => {
    if (movedToSub) {
      Animated.spring(value, {
        toValue: 20,
        bounciness: 5,
        duration: 200,
        useNativeDriver: false,
      }).start();
      movedToSub = false;
    } else {
      Animated.spring(value, {
        toValue: WIDTH,
        bounciness: 10,
        duration: 200,
        useNativeDriver: false,
      }).start();
      movedToSub = true;
    }
  };
  return (
    <Container>
      <Logo
        resizeMode="contain"
        source={require("../../assets/gameAgoraLogo.png")}
      />
      <Animated.View style={{ width: "100%", height: "100%", right: value }}>
        <List>
          <ItemContainer>
            <Item>
              <Title>앱 이름</Title>
              <Text>게임아고라</Text>
            </Item>
            <Item>
              <Title>앱 버전</Title>
              <Text>{Constants.manifest.version}</Text>
            </Item>
            <Item>
              <Title>개발자</Title>
              <Text>벼루</Text>
            </Item>
            <Item>
              <Title>소스 출처</Title>
              <TouchableOpacity onPress={() => moveContainer()}>
                <Feather name="arrow-right-circle" size={27} color="black" />
              </TouchableOpacity>
            </Item>
          </ItemContainer>
          <Footer>
            <Text style={{ marginRight: 10, fontWeight: "bold" }}>
              Powered by
            </Text>
            <FontAwesome5 name="react" size={24} color="skyblue" />
          </Footer>
        </List>
        <SubPage>
          <SubHeader>
            <TouchableOpacity onPress={() => moveContainer()}>
              <Feather name="arrow-left-circle" size={35} color="black" />
            </TouchableOpacity>
            <Title style={{ marginLeft: 50, fontWeight: "bold" }}>
              소스 출처
            </Title>
          </SubHeader>
          <SubMain>
            <Text style={{ marginBottom: 10 }}>
              ▶ Icon made by Freepik from https://www.flaticon.com
            </Text>
            <Text style={{ marginBottom: 10 }}>
              ▶ Icon made by Pixel perfect from https://www.flaticon.com
            </Text>
            <Text>
              ▶ Icon made by sterankofrank from
              https://www.onlinewebfonts.com/icon
            </Text>
          </SubMain>
        </SubPage>
      </Animated.View>
    </Container>
  );
};
