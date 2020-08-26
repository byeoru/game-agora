import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const goToDetail = (params = {}) =>
    navigation.navigate("GameDetail", { ...params });
  return goToDetail;
};
