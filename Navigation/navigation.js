import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigation>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigation>
    </NavigationContainer>
  );
}
