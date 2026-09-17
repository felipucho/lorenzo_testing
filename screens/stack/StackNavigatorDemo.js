// 2- Stack Navigator
import { Pressable, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import ProductosScreen from "./ProductosScreen";
import DetalleScreen from "./DetalleScreen";

const Stack = createStackNavigator();

export default function StackNavigatorDemo({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()} style={{ marginLeft: 12 }}>
              <Text style={{ color: "#4361ee", fontSize: 16 }}>‹ Menú</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="Productos"
        component={ProductosScreen}
        options={{ title: "Productos" }}
      />
      <Stack.Screen
        name="Detalle"
        component={DetalleScreen}
        options={{ title: "Detalle" }}
      />
    </Stack.Navigator>
  );
}
