import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import MenuScreen from "./screens/MenuScreen";
import SimpleNavScreen from "./screens/simple/SimpleNavScreen";
import StackNavigatorDemo from "./screens/stack/StackNavigatorDemo";
import TabNavigatorDemo from "./screens/tab/TabNavigatorDemo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ title: "Tipos de Navegaciones" }}
        />
        <Stack.Screen
          name="SimpleNav"
          component={SimpleNavScreen}
          options={{ title: "1. Navegación simple" }}
        />
        <Stack.Screen
          name="StackDemo"
          component={StackNavigatorDemo}
          options={{ title: "2. Stack Navigator", headerShown: false }}
        />
        <Stack.Screen
          name="TabDemo"
          component={TabNavigatorDemo}
          options={{ title: "3. Tab Navigator", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
