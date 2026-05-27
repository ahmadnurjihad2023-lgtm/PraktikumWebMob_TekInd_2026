import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Import Screens
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

// Membukan Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* ubah initialroutername menjadi detail */}
      <Stack.Navigator initialRouteName="Detail">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Gudang Ind. v1.0" }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params?.itemData.nama || "Detail",
          })}
          initialParams={{ itemData: { nama: "Mur Ring 12", stok: 2, lokasi: "Rak A-2" } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
