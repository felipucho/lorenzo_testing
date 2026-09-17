import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";

const productosEjemplo = [
  { id: 1, nombre: "Notebook", precio: 850000 },
  { id: 2, nombre: "Mouse", precio: 25000 },
  { id: 3, nombre: "Teclado", precio: 45000 },
];

export default function ProductosScreen({ navigation }) {
  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.titulo}>🛒 Productos</Text>

      <FlatList
        data={productosEjemplo}
        keyExtractor={(producto) => producto.id.toString()}
        renderItem={({ item: producto }) => (
          <Pressable
            style={({ pressed }) => [
              estilos.tarjeta,
              pressed && estilos.tarjetaPresionada,
            ]}
            onPress={() =>
              navigation.navigate("Detalle", {
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
              })
            }
          >
            <Text style={estilos.nombreProducto}>{producto.nombre}</Text>

            <Text style={estilos.precio}>
              ${producto.precio.toLocaleString()}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 16,
    marginTop: 8,
  },
  tarjeta: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  tarjetaPresionada: {
    opacity: 0.8,
  },
  nombreProducto: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1a1a2e",
  },
  precio: {
    fontSize: 16,
    color: "#4361ee",
    fontWeight: "bold",
  },
});
