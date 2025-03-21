# 📚 API de Gestión de Biblioteca

![Node.js](https://img.shields.io/badge/Node.js-16.x-green?style=flat&logo=node.js) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat&logo=javascript) ![Status](https://img.shields.io/badge/Status-En%20Desarrollo-orange)

## 🚀 Descripción

Este proyecto es un **Trabajo Práctico Integrador** del Módulo 2 - Fundamentos de Node.js. 
Consiste en el desarrollo de una API de gestión de bibliotecas basada en un **servidor TCP**, permitiendo manejar datos almacenados en archivos JSON. 

🛠️ **Tecnologías utilizadas:**
- Node.js
- Módulo `net` para la comunicación TCP
- JSON para almacenamiento de datos
- Modularización con el patrón MVC

## 🎯 Objetivos del Proyecto
✅ Implementar un servidor TCP en Node.js.
✅ Gestionar libros, autores y editoriales mediante archivos JSON.
✅ Desarrollar un cliente TCP para interactuar con la API.
✅ Aplicar buenas prácticas de programación.

## 📁 Estructura del Proyecto
```bash
📦 book-api
 ┣ 📂 controllers    # Lógica de la aplicación
 ┣ 📂 models         # Gestión de datos
 ┣ 📂 views          # Respuestas al usuario
 ┣ 📂 data           # Archivos JSON (books.json, authors.json, publishers.json)
 ┣ 📜 server.js      # Servidor TCP
 ┣ 📜 client.js      # Cliente TCP
 ┣ 📜 package.json   # Configuración de dependencias
 ┗ 📜 README.md      # Documentación
```

## 🔧 Instalación y Configuración
1️⃣ Clona este repositorio:
```sh
git clone https://github.com/usuario/book-api.git
```
2️⃣ Accede al directorio del proyecto:
```sh
cd book-api
```
3️⃣ Instala las dependencias:
```sh
npm install
```
4️⃣ Inicia el servidor:
```sh
npm start
```

## ✅ Funcionalidades Implementadas
✔️ **Listar libros, autores y editoriales**
✔️ **Añadir nuevos libros, autores y editoriales**
✔️ **Actualizar y eliminar registros**
✔️ **Gestión de errores y validaciones**

---
📌 **Autoras:**
- Ariadna Germano
- Agustina Gonzalez
- Lucero Condori Rivera
- Vanina Andrea Alvarez

📩 **Contacto:** lucero.crivera@gmail.com
