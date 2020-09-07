import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const goToMoreGames = (params = {}) =>
    navigation.navigate("MoreGames", { ...params });
  return goToMoreGames;
};
