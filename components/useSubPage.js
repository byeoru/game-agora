import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const goToTotalImageVideo = (params = {}) =>
    navigation.navigate("SubPage", { ...params });
  return goToTotalImageVideo;
};
