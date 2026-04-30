import { useEffect } from "react";
import { Text, View } from "react-native";
import api from "../../services/app";

export default function HomeScreen() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/");
        console.log("API response:", res.data);
      } catch (err) {
        console.log("Error calling API");
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}