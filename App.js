import { StyleSheet, Text, View } from "react-native";
// importar las pantallas
// aqui abajo
import TabNavigator from "./Navigation/TabNavigation";

export default function App() {
  return <TabNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1FA9DB",
    alignItems: "center",
    justifyContent: "center",
  },
});
