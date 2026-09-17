# Tipos de Navegaciones (React Native / Expo)

Proyecto Expo con tres ejemplos de navegación en React Native, tomados y
adaptados de un notebook de referencia. Desde el menú principal se puede
entrar a cada uno.

## Ejemplos incluidos

1. **Navegación simple** ([screens/simple/SimpleNavScreen.js](screens/simple/SimpleNavScreen.js))
   Cambio de pantalla manejado con `useState`, sin ninguna librería de
   navegación.

2. **Stack Navigator** ([screens/stack](screens/stack))
   `Home → Productos → Detalle`, usando `@react-navigation/stack` y paso de
   parámetros con `navigation.navigate(...)` / `route.params`.

3. **Tab Navigator** ([screens/tab/TabNavigatorDemo.js](screens/tab/TabNavigatorDemo.js))
   Navegación por pestañas inferiores (Inicio, Productos, Perfil) con
   `@react-navigation/bottom-tabs`.

Todo se integra en [App.js](App.js) mediante un Stack Navigator externo cuya
primera pantalla es el menú ([screens/MenuScreen.js](screens/MenuScreen.js)).

## Cómo correrlo

```bash
npm install
npm start
```

Luego abrí la app con Expo Go (Android/iOS) escaneando el QR, o presioná
`w` para abrirlo en el navegador.
