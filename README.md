# 🚀 ExpressJs Desde Cero: Guía Básica y Fundamental

Bienvenido a esta guía donde aprenderás a usar **ExpressJs** desde sus conceptos más básicos. Si estás comenzando en el mundo del desarrollo backend con **Node.js**, esta referencia te ayudará a entender las bases esenciales para construir servidores rápidos y eficientes. A lo largo de esta guía, utilizaremos ejemplos prácticos y comandos sencillos. ¡Pongámonos en marcha! 🚀

## Contenidos

-   [00 - Introducción](#00---introducción)
-   [01 - Instalación y Configuración Básica](#01---instalación-y-configuración-básica)

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

Configura del archivo `.gitignore` para omitir carpetas y archivos innecesarios:
