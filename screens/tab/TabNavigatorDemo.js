// 3- Tab Navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

function InicioScreen() {
  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.titulo}>Inicio</Text>
      <Text style={estilos.texto}>Pantalla principal de la app</Text>
    </View>
  );
}

function ProductosScreen() {
  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.titulo}>Productos</Text>
      <Text style={estilos.texto}>Acá van los productos</Text>
    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.titulo}>Perfil</Text>
      <Text style={estilos.texto}>Información de usuario</Text>
    </View>
  );
}

export default function TabNavigatorDemo({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4361ee",
        tabBarInactiveTintColor: "#aaa",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#eee",
          paddingBottom: 5,
          height: 60,
        },
        headerStyle: { backgroundColor: "#4361ee" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerLeft: () => (
          <Pressable onPress={() => navigation.goBack()} style={{ marginLeft: 12 }}>
            <Text style={{ color: "#fff", fontSize: 16 }}>‹ Menú</Text>
          </Pressable>
        ),
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
        options={{ tabBarLabel: "Inicio", tabBarIcon: () => <Text>🏠</Text> }}
      />
      <Tab.Screen
        name="Productos"
        component={ProductosScreen}
        options={{
          tabBarLabel: "Productos",
          tabBarIcon: () => <Text>🛒</Text>,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ tabBarLabel: "Perfil", tabBarIcon: () => <Text>👤</Text> }}
      />
    </Tab.Navigator>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 8,
  },
  texto: {
    fontSize: 15,
    color: "#666",
  },
});
