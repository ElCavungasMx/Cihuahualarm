import "react-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// importar las pantallas
import { NavigationContainer } from "@react-navigation/native";
// aqui abajo

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
