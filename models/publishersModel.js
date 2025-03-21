// Módulo para manejar operaciones de archivos. 
const fs = require('fs');
//Módulo para manejar rutas de archivos .
const path = require('path');
 //Definir la ruta del archivo JSON donde se almacenan las editoriales .
const publishersPath = path.join(__dirname, '../data/publishers.json');

function getPublishers() {
    // Leer el archivo JSON como texto.
    const data = fs.readFileSync(publishersPath);
    // Convertir el contenido en un objeto JScript.
    return JSON.parse(data);
}

function addPublisher(publisher) {
    //Obtener la lista actual de editoriales.
    const publishers = getPublishers();
     // Agregar la nueva editorial.
    publishers.push(publisher);
    // Guardar en el archivo con formato legible .
    fs.writeFileSync(publishersPath, JSON.stringify(publishers, null, 2));
}

// Exporta las funciones ´getPublisher' y 'addPublisher'para que puedan ser utilizadas en otros archivos del proyecto.
module.exports = { getPublishers, addPublisher };