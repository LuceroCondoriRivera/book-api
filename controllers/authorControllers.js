const { findAuthor } = require('../models/authorsModel'); // Permite buscar un autor por su nombre en la base de datos .


const handleAuthorsRequest = (authorName) => { // Maneja la solicitud para buscar un autor por su nombre .
    return findAuthor(authorName);// Llama a la función y retorna el resultado.
};

module.exports = { handleAuthorsRequest };// Exporta la función para que pueda ser utilizada en otros archivos del proyecto.
