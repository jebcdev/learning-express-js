# 🚀 ExpressJs Desde Cero: Guía Básica y Fundamental

Bienvenido a esta guía donde aprenderás a usar **ExpressJs** desde sus conceptos más básicos. Si estás comenzando en el mundo del desarrollo backend con **Node.js**, esta referencia te ayudará a entender las bases esenciales para construir servidores rápidos y eficientes. A lo largo de esta guía, utilizaremos ejemplos prácticos y comandos sencillos. ¡Pongámonos en marcha! 🚀

---

## 00 - Introducción

### 🛠️ ¿Qué es **Node.js**?

Node.js es un entorno de ejecución para JavaScript del lado del servidor, lo que te permite crear aplicaciones escalables y de alto rendimiento. Para más información, consulta su [documentación oficial](https://nodejs.org/es).

### 🌐 ¿Qué es **Express.js**?

Express.js es un framework minimalista para Node.js que facilita la creación de servidores web robustos y aplicaciones backend. Aprende más en su [guía oficial](https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction).

---

## 01 - Instalación y Configuración Básica

### 🛒 Inicialización del Proyecto Node.js

Primero, debemos crear un proyecto de Node.js:

```bash
npm init
```

Si quieres omitir las preguntas y usar los valores por defecto:

```bash
npm init -y
```

### 🔧 Configuración Básica del `package.json`

Agrega la propiedad `type` para usar módulos ES:

```json
"type": "module"
```

Esto te permite usar `import` y `export` en lugar de `require`.

### 🔄 Comandos de Desarrollo y Producción

Configura los scripts en `package.json` para facilitar el desarrollo:

```json
"scripts": {
  "start": "node index.js",
  "dev": "node --watch index.js"
}
```

Usa `npm run dev` para iniciar el servidor en modo desarrollo con reinicios automáticos.

### ✅ Creación de Archivos .gitignore

Configura el archivo `.gitignore` para omitir carpetas y archivos innecesarios:

---

## 02 - Instalar y Probar ExpressJs

### 🛒 Instalar ExpressJS vía NPM

Para instalar la versión más reciente:

```bash
npm install express@^5.0.1 --save
```

### 🔧 Utilizar ExpressJs en el Archivo `app.js`

Primero, crea el archivo `app.js` y agrega el siguiente código:

```javascript
import express from "express";
const app = express();

// Definir el primer endpoint
app.get("/", (req, res) => {
    res.send("Hola, mundo desde Express!");
});

// Levantar el servidor
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```

### 🌐 Consultar desde el Navegador

1. Ejecuta el servidor:

    ```bash
    npm run dev
    ```

2. Abre tu navegador y visita `http://localhost:4000` para ver la respuesta del servidor.

### 🔓 Instalar, Configurar y Usar DotEnv

1. Instala `dotenv` para manejar variables de entorno:

    ```bash
    npm install dotenv
    ```

2. Crea un archivo `.env` y define tus variables:

    ```plaintext
    PORT=4000
    ```

3. Modifica `app.js` para usar `dotenv`:

    ```javascript
    import "dotenv/config";

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
    ```

### 🛁 Instalar y Configurar CORS

**CORS** (Cross-Origin Resource Sharing) es un mecanismo que permite controlar las solicitudes entre diferentes dominios. Es especialmente útil cuando el cliente (frontend) y el servidor (backend) se ejecutan en diferentes orígenes.

1. Instala el paquete `cors`:

    ```bash
    npm install cors
    ```

2. Importa y usa `cors` en tu aplicación:

    ```javascript
    import cors from "cors";

    app.use(cors());
    ```

El uso de `cors()` sin parámetros permite todas las solicitudes entre dominios. Para una configuración más estricta, puedes especificar opciones adicionales como `origin` para definir dominios permitidos.

### 🔎 Analizar Datos JSON y Formularios

Para manejar datos de entrada en tu servidor Express, es necesario configurar middlewares que procesen las solicitudes JSON y las enviadas mediante formularios.

1. Habilita el análisis de JSON:

    ```javascript
    app.use(express.json());
    ```

    Este middleware permite que tu servidor procese datos en formato JSON, como los enviados desde un cliente mediante `POST` o `PUT`.

2. Habilita el análisis de formularios codificados en URL:

    ```javascript
    app.use(express.urlencoded({ extended: true }));
    ```

    Esta línea permite manejar datos enviados mediante formularios HTML. La opción `{ extended: true }` permite analizar objetos anidados y arreglos.

Ambos middlewares son esenciales para aplicaciones que aceptan datos desde formularios o APIs RESTful.

## 03 - CRUD Básico (Para probar todos los metodos)

## 04 - Implementar ZOD Validator | Usando Postman para Probar Nuestra Api

## 05 - Introducción al uso de Prisma ORM

## 06 - Modificar Tabla de Usuarios para Almacenar una Contraseña Usando BCryptJs 

## 07 - Implementar Login/Register

## 08 - Proteger Rutas (Usuarios Autentificads) => Profile
