const { getBooks } = require('../models/booksModel'); // Permite acceder a la lista de libros almacenadas en el archivo JSON.

const handleBooksRequest = () => { //Define una función para poder obtener la lista de libros.

    return getBooks(); // Llama a la funcion 'getPublisher' para obtener la lista de libros y devuelve el resultado.
};

module.exports = { handleBooksRequest };// Exporta la función para que pueda ser utilizadas en otros archivos del proyectos .