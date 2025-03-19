const fs = require('fs'); // Módulo para manejar operaciones de archivos. 
const path = require('path'); //Módulo para manejar rutas de archivos .
const publishersPath = path.join(__dirname, '../data/publishers.json'); //Definir la ruta del archivo JSON donde se almacenan las editoriales .

function getPublishers() { 
    const data = fs.readFileSync(publishersPath); // Leer el archivo JSON como texto.
    return JSON.parse(data); // Convertir el contenido en un objeto JScript.
}

function addPublisher(publisher) { const fs = require('fs');
const path = require('path');const fs = require('fs');// 
const path = require('path');// Importa el módulo 'path' para manejar rutas de archivos y directorios.
const publishersPath = path.join(__dirname, '../data/publishers.json');

function getPublishers() {
    const data = fs.readFileSync(publishersPath); // Lee el contenido del archivo JSON de manera síncrona .
    return JSON.parse(data);// Convierte el contenido JSON a un objeto JScript y lo devuelve.
}

function addPublisher(publisher) {
    const publishers = getPublishers(); //Obtener la lista actual de editoriales.
    publishers.push(publisher); // Agregar la nueva editorial.
    fs.writeFileSync(publishersPath, JSON.stringify(publishers, null, 2));// Guardar en el archivo con formato legible .
}

module.exports = { getPublishers, addPublisher };// Exporta las funciones ´getPublisher' y 'addPublisher'para que puedan ser utilizadas en otros archivos del proyecto.
const publishersPath = path.join(__dirname, '../data/publishers.json');// Define la ruta absoluta al archivo 'publisher.json´ubicada en la carpeta 'data'dentro del proyecto.

function getPublishers() {
    const data = fs.readFileSync(publishersPath);//Lee el contenido del archivo JSON de manera síncrona y lo almacena en la variable 'data'.
    return JSON.parse(data);// Convierte el contenido del archivo JSON a un objeto JavaScript y lo retoma .
}

function addPublisher(publisher) {
    // Obtiene la lista actual de editores .
    const publishers = getPublishers();const fs = require('fs'); //Importa el módulo'fs'para manejar operaciones con archivos.
const path = require('path');
const publishersPath = path.join(__dirname, '../data/publishers.json');

function getPublishers() {
    const data = fs.readFileSync(publishersPath);
    return JSON.parse(data);
}

function addPublisher(publisher) {
    const publishers = getPublishers();
    publishers.push(publisher);
    fs.writeFileSync(publishersPath, JSON.stringify(publishers, null, 2));
}

module.exports = { getPublishers, addPublisher }; // Exporta las funciones 'getPublisher ' y 'addPublisher'para que puedan ser utilizadas en otros archivos del proyecto.
    publishers.push(publisher); // Agrega la nueva editoriala la lista existente.
    fs.writeFileSync(publishersPath, JSON.stringify(publishers, null, 2)); // JSON.stringify convierte el objeto en formato JSON con sangría de 2 espacios .
}

module.exports = { getPublishers, addPublisher };
    const publishers = getPublishers();
    publishers.push(publisher);
    fs.writeFileSync(publishersPath, JSON.stringify(publishers, null, 2));
}

module.exports = { getPublishers, addPublisher };
