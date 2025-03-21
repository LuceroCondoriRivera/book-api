const { getPublishers } = require('../models/publishersModel'); // Permite acceder a la lista de editoriales almacenadas en el archivo JSON.

const handlePublishersRequest = () => { //Define una función para poder obtener la lista de editoriales.

    return getPublishers(); // Llama a la funcion 'getPublisher' para obtener la lista de editoriales y devuelve el resultado.
};

module.exports = { handlePublishersRequest };// Exporta la función para que pueda ser utilizadas en otros archivos del proyectos .