import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const goToSubPage = (params = {}) =>
    navigation.navigate("SubPage", { ...params });
  return goToSubPage;
};
