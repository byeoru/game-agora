import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const goToMore = (params = {}) => navigation.navigate("More", { ...params });
  return goToMore;
};
