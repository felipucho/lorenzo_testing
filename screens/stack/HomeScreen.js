import { View, Text, Pressable, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.titulo}>Inicio</Text>
      <Text style={estilos.texto}>Bienvenido</Text>

      <Pressable
        style={({ pressed }) => [
          estilos.boton,
          pressed && estilos.botonPresionado,
        ]}
        onPress={() => navigation.navigate("Productos")}
      >
        <Text style={estilos.botonTexto}>Ver productos →</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#1a1a2e",
  },
  texto: {
    fontSize: 16,
    color: "#555",
    marginBottom: 32,
  },
  boton: {
    backgroundColor: "#4361ee",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  botonPresionado: {
    opacity: 0.75,
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
