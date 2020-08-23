import { useNavigation } from "@react-navigation/native";

export default (params = {}) => {
  const navigation = useNavigation();
  const goToMore = () => navigation.navigate("More", { ...params });
  return goToMore;
};
