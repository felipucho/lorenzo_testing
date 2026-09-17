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
   Navegación por pestañas inferiores (Inicio, Productos, Perfil, Ajustes)
   con `@react-navigation/bottom-tabs`. La pestaña **Productos** contiene un
   Stack Navigator anidado ([screens/tab/ProductosStack.js](screens/tab/ProductosStack.js))
   que reutiliza las pantallas `Productos → Detalle` del ejemplo 2, para
   mostrar cómo combinar tabs con un stack dentro de una pestaña.

Todo se integra en [App.js](App.js) mediante un Stack Navigator externo cuya
primera pantalla es el menú ([screens/MenuScreen.js](screens/MenuScreen.js)).

## Cómo correrlo

```bash
npm install
npm start
```

Luego abrí la app con Expo Go (Android/iOS) escaneando el QR, o presioná
`w` para abrirlo en el navegador.

## Compilar un binario con EAS Build

El proyecto ya incluye [`eas.json`](eas.json) con tres perfiles (`development`,
`preview`, `production`) y los identificadores de app en
[`app.json`](app.json) (`com.felipucho.tiposnavegaciones`). Pasos (requieren
una cuenta de Expo y login interactivo, así que se corren desde tu propia
terminal, no desde este asistente):

```bash
npm install -g eas-cli
eas login
eas build:configure   # solo la primera vez, si aún no existe un projectId
eas build --platform all --profile preview
```

- `--profile production` genera el binario final para las stores.
- `--platform android` o `--platform ios` para compilar uno solo.
- El `android.package` / `ios.bundleIdentifier` en `app.json` son valores
  provisorios (`com.felipucho.tiposnavegaciones`); cambialos antes de
  publicar si querés otro identificador.
