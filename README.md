# 📺 TvApp

Una aplicación web moderna y profesional construida con **Angular 21** para buscar, explorar y descubrir programas de televisión utilizando la API de TMDB (The Movie Database).

## Características

- **Búsqueda en Tiempo Real y Eficiente**: Búsqueda optimizada con un mecanismo de _debounce_ (retraso) de 500ms para evitar múltiples recargas y llamadas innecesarias a la API.
- **Paginación Inteligente**: Paginación integrada con reseteo automático al realizar nuevas búsquedas y gestión de hasta 500 páginas.
- **Gestión de Estado Reactivo**: Implementación limpia y declarativa gracias al nuevo `rxResource` y los _Signals_ de Angular (`computed`, `inject`), combinados con RxJS para un flujo asíncrono y predecible.
- **Interfaz Moderna (UI)**: Diseño responsivo, estético y en modo oscuro impulsado con la última versión de **TailwindCSS v4** y los increíbles componentes de **daisyUI v5**.

## Tecnologías Empleadas

- **Framework**: Angular 21
- **Lenguaje**: TypeScript
- **Reactividad**: Angular Signals & RxJS
- **Estilos**: TailwindCSS v4, daisyUI v5
- **Pruebas**: Vitest

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu máquina:

- [Node.js](https://nodejs.org/es/) (v18 o superior)
- [npm](https://www.npmjs.com/) (Gestor de paquetes, normalmente se instala con Node.js)

## Instalación y Configuración

1. **Clona el repositorio** o descarga el código fuente del proyecto:

   ```bash
   git clone <url-del-repositorio>
   cd tvapp
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Configura las Variables de Entorno (API Key)**:
   Necesitarás una API Key de TMDB. Para que la aplicación funcione, asegúrate de tener el archivo de entornos en `src/environments/environments.ts` y añadir tu clave:
   ```typescript
   export const environment = {
     production: false,
     api_key: 'TU_API_KEY_AQUI',
   };
   ```

## Entorno de Desarrollo

Para iniciar el servidor de desarrollo local, ejecuta:

```bash
npm start
```

Luego abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente siempre que modifiques alguno de los archivos.

## Construcción (Producción)

Para compilar el proyecto y prepararlo para producción:

```bash
npm run build
```

Los archivos minificados y optimizados se generarán en la ruta configurada (generalmente `dist/`).

## Pruebas (Testing)

El proyecto utiliza Vitest para las pruebas ágiles. Para ejecutarlas:

```bash
npm test
```

## Estructura Principal del Proyecto

Una vista rápida a la organización del código:

- `src/app/store-front/pages/home-page`: Contiene el componente principal donde se lista y busca el contenido.
- `src/app/television/components`: Componentes visuales reutilizados a lo largo de la app (ej: `TvCard`).
- `src/app/television/services`: Lógica de conexión con la API y manejo unificado del estado de búsqueda (`TvService`, `SearchService`).
- `src/app/shared/components/pagination`: Componente transversal de paginación que se gestiona de forma global.

---

Desarrollado con ❤️ y las últimas innovaciones de Angular.
