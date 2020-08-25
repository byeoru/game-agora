import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const goToTotalImage = (params = {}) =>
    navigation.navigate("TotalImage", { ...params });
  return goToTotalImage;
};
