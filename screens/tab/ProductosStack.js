// Stack Navigator anidado dentro de la pestaña "Productos" del Tab Navigator.
// Reutiliza las mismas pantallas del ejemplo 2 (Stack Navigator).
import { createStackNavigator } from "@react-navigation/stack";
import ProductosScreen from "../stack/ProductosScreen";
import DetalleScreen from "../stack/DetalleScreen";

const Stack = createStackNavigator();

export default function ProductosStack() {
  return (
    <Stack.Navigator
      initialRouteName="Productos"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Productos" component={ProductosScreen} />
      <Stack.Screen name="Detalle" component={DetalleScreen} />
    </Stack.Navigator>
  );
}
