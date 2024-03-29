import React from "react";
import styled from "styled-components/native";
import Constants from "expo-constants";
import ScrollContainer from "../../components/ScrollContainer";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, Animated } from "react-native";
import { HEIGHT, WIDTH } from "../../utils";
import i18n from "i18n-js";

const Logo = styled.Image`
  width: 300px;
  height: 300px;
`;
const List = styled.View`
  width: 100%;
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
  margin-top: 50px;
`;
const SubPage = styled.View`
  width: 100%;
  padding: 10px 32px 30px 10px;
  margin-left: 20px;
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
    <ScrollContainer contentContainerStyle={{ minHeight: "100%" }}>
      <Logo
        resizeMode="contain"
        source={require("../../assets/gameAgoraLogo.png")}
      />
      <Animated.View
        style={{
          width: "100%",
          flexDirection: "row",
          paddingBottom: 60,
          right: value,
        }}
      >
        <List>
          <ItemContainer>
            <Item>
              <Title>{i18n.t("appName")}</Title>
              <Text>{i18n.t("gameAgora")}</Text>
            </Item>
            <Item>
              <Title>{i18n.t("appVersion")}</Title>
              <Text>{Constants.manifest.version}</Text>
            </Item>
            <Item>
              <Title>{i18n.t("developer")}</Title>
              <Text>{i18n.t("byeoru")}</Text>
            </Item>
            <Item>
              <Title>{i18n.t("source")}</Title>
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
              {i18n.t("source")}
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
    </ScrollContainer>
  );
};
