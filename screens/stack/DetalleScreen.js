import { View, Text, Pressable, StyleSheet } from "react-native";

export default function DetalleScreen({ route, navigation }) {
  // Recibimos los parámetros que mandamos con navigate()
  const { id, nombre, precio } = route.params;

  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.titulo}>{nombre}</Text>

      <View style={estilos.tarjeta}>
        <Text style={estilos.etiqueta}>ID del producto</Text>
        <Text style={estilos.valor}>#{id}</Text>

        <Text style={estilos.etiqueta}>Nombre</Text>
        <Text style={estilos.valor}>{nombre}</Text>

        <Text style={estilos.etiqueta}>Precio</Text>
        <Text style={estilos.precio}>${precio.toLocaleString()}</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          estilos.boton,
          pressed && estilos.botonPresionado,
        ]}
        onPress={() => navigation.goBack()}
      >
        <Text style={estilos.botonTexto}>← Volver</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 20,
    marginTop: 8,
  },
  tarjeta: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 20,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  etiqueta: {
    fontSize: 13,
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginTop: 12,
  },
  valor: {
    fontSize: 17,
    color: "#1a1a2e",
    fontWeight: "500",
    marginTop: 4,
  },
  precio: {
    fontSize: 24,
    color: "#4361ee",
    fontWeight: "bold",
    marginTop: 4,
  },
  boton: {
    backgroundColor: "#4361ee",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignItems: "center",
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
