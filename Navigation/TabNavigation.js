// importando todas las cosas que necesitamos
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";

// Importar las pantallas
import AddAlarm from "../screens/AddAlarm";
import ListOfAlarm from "../screens/ListofAlarm";

// para escribir menos
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  // necesitamos mostrarlos en la pantalla
  return (
    // vamos a llamar a las pantallas
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Añadir alarma") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name === "Listado de las Alarmas") {
              iconName = focused ? "list-circle" : "list-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Añadir alarma" component={AddAlarm} />
        <Tab.Screen name="Listado de las Alarmas" component={ListOfAlarm} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
