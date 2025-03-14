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

const fs = require('fs');
const path = require('path');
const authorsPath = path.join(__dirname, '../data/authors.json');

function getAuthors() {
    const data = fs.readFileSync(authorsPath);
    return JSON.parse(data);
}

function addAuthor(author) {
    const authors = getAuthors();
    authors.push(author);
    fs.writeFileSync(authorsPath, JSON.stringify(authors, null, 2));
}

const findAuthor = (query) => {
    const authors = getAuthors();
    if (typeof query === 'string') {
        return authors.filter(author => author.name.toLowerCase().includes(query.toLowerCase())
        );
    }
    return null;
}

module.exports = { getAuthors, addAuthor, findAuthor };