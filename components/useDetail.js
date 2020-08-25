import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const goToDetail = (params = {}) =>
    navigation.navigate("Detail", { ...params });
  return goToDetail;
};
