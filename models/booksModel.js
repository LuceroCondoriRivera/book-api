//Importamos el modulo fs de Node.js para realizar operaciones de archivos

const fs = require('fs')
//Importamos el módulo 'path'para manejar rutas de archivos de forma segura .
const path = require('path')
//Definimos la ruta del ejercicio JSON donde se almacenan los libros.
const filePath = path.join(__dirname, './books.json')
const getBookById = (id) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8')  //Leemos el contenido del archivo books.json de forma síncrona.

        const books = JSON.parse(data) // Parseamos el contenido JSON para convertirlo en un array de objetos .

        return books.find(book => book.id === id) || null //Buscamos el libro cuyo ID coincida con el proporcionado.

    } catch (error) {
        // Capturamos cualquier error al leer el archivo ao a parsear el JSON.
        console.error('error al leer el archivo json: ', error)
        return null
    }
}

// Exportamos la función para que pueda ser utilizada en otros módulos
module.exports = getBookById