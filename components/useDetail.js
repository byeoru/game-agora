import { useNavigation } from "@react-navigation/native";

export default (params = {}) => {
  const navigation = useNavigation();
  const goToDetail = () => navigation.navigate("Detail", { ...params });
  return goToDetail;
};
