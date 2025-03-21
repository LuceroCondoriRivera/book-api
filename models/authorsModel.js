// 6. Gestión de Autores y Editoriales en la API
// Objetivo: Implementar funcionalidades para gestionar autores y editoriales en la API.
// Instrucciones:
// a) Implementa funciones en los modelos y controladores para listar autores, buscar autores 
// por nombre o nacionalidad, añadir nuevos autores, listar editoriales y añadir nuevas 
// editoriales con sus respectivos atributos.
// b) Asegúrate de que estas funciones sean accesibles desde el servidor TCP mediante comandos 
// como: 
// • GET AUTHORS
// • ADD AUTHOR 
// • GET PUBLISHERS
// • ADD PUBLISHER

const fs = require('fs'); // Módulo nativo de Node.js para manipulacion de archivos.

const path = require('path'); // Módulo para manejar rutas de archivos de manera compatible con diferentes sistemas opertivos .

const authorsPath = path.join(__dirname, '../data/authors.json');  //Ruta del archivo JSON donde se almacenan los autores .


function getAuthors() {
    const data = fs.readFileSync(authorsPath);  //Lee el archivo de manera síncrona.

    return JSON.parse(data); // Convierte el contenido JSON en un array de objetos .
}

function addAuthor(author) {
    const authors = getAuthors(); // Obtiene la lista actual de autores.

    authors.push(author); // Agrega el nuevo autor al array.

    fs.writeFileSync(authorsPath, JSON.stringify(authors, null, 2)); // Guarda los cambios en el archivo JSON , con formato legible.
}

const findAuthor = (query) => {
    const authors = getAuthors(); // Obtiene la lista de autores.
  
    //Verifica que la consulta sea un string válido antes de hacer la busqueda.

    if (typeof query === 'string') {
        //Filtra autores cuyo nombre coincida ( sin importar mayúsculas - minúsculas ).
        return authors.filter(author => author.name.toLowerCase().includes(query.toLowerCase())
        );
    }
    return null; // Retorna "null"si la consulta no es un string válido.
}

// Exporta las funciones para poder usarlas en otros archivos .
module.exports = { getAuthors, addAuthor, findAuthor };