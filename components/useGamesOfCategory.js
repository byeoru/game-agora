import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const goToMore = (params = {}) =>
    navigation.navigate("GamesOfCategory", { ...params });
  return goToMore;
};
