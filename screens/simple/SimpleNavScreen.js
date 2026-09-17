// 1- Navegación simple (sin librería de navegación, con useState)
import { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function PantallaInicio({ onNavegar }) {
  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.titulo}>Inicio</Text>
      <Text style={estilos.texto}>Bienvenido a la app</Text>

      <Pressable
        style={({ pressed }) => [
          estilos.boton,
          pressed && estilos.botonPresionado,
        ]}
        onPress={() => onNavegar("detalle")}
      >
        <Text style={estilos.botonTexto}>Ver detalle →</Text>
      </Pressable>
    </View>
  );
}

function PantallaDetalle({ onNavegar }) {
  return (
    <View style={estilos.pantalla}>
      <Text style={estilos.titulo}>Detalle</Text>
      <Text style={estilos.texto}>Esta es la pantalla de detalle</Text>

      <Pressable
        style={({ pressed }) => [
          estilos.boton,
          estilos.botonSecundario,
          pressed && estilos.botonPresionado,
        ]}
        onPress={() => onNavegar("inicio")}
      >
        <Text style={estilos.botonTexto}>← Volver</Text>
      </Pressable>
    </View>
  );
}

export default function SimpleNavScreen() {
  const [pantallaActual, setPantallaActual] = useState("inicio");

  return (
    <View style={{ flex: 1 }}>
      {pantallaActual === "inicio" && (
        <PantallaInicio onNavegar={setPantallaActual} />
      )}
      {pantallaActual === "detalle" && (
        <PantallaDetalle onNavegar={setPantallaActual} />
      )}
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
  botonSecundario: {
    backgroundColor: "#6c757d",
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
