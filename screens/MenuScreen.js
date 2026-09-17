import { View, Text, Pressable, StyleSheet } from "react-native";

const ejemplos = [
  {
    ruta: "SimpleNav",
    titulo: "1. Navegación simple",
    descripcion: "Cambio de pantalla con useState, sin librería de navegación.",
  },
  {
    ruta: "StackDemo",
    titulo: "2. Stack Navigator",
    descripcion: "Home → Productos → Detalle, con paso de parámetros.",
  },
  {
    ruta: "TabDemo",
    titulo: "3. Tab Navigator",
    descripcion: "Navegación por pestañas inferiores (Inicio, Productos, Perfil).",
  },
];

export default function MenuScreen({ navigation }) {
  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.titulo}>Tipos de Navegaciones</Text>
      <Text style={estilos.subtitulo}>Elegí un ejemplo para ver cómo funciona</Text>

      {ejemplos.map((ejemplo) => (
        <Pressable
          key={ejemplo.ruta}
          style={({ pressed }) => [
            estilos.tarjeta,
            pressed && estilos.tarjetaPresionada,
          ]}
          onPress={() => navigation.navigate(ejemplo.ruta)}
        >
          <Text style={estilos.tarjetaTitulo}>{ejemplo.titulo}</Text>
          <Text style={estilos.tarjetaTexto}>{ejemplo.descripcion}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    paddingTop: 32,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1a1a2e",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 15,
    color: "#666",
    marginBottom: 24,
  },
  tarjeta: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  tarjetaPresionada: {
    opacity: 0.8,
  },
  tarjetaTitulo: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4361ee",
    marginBottom: 6,
  },
  tarjetaTexto: {
    fontSize: 14,
    color: "#555",
  },
});
