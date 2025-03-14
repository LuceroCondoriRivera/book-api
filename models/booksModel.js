//Importamos el modulo fs de Node.js para realizar operaciones de archivos

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, './books.json')
const getBookById = (id) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8')
        const books = JSON.parse(data)
        return books.find(book => book.id === id) || null
    } catch (error) {
        console.error('error al leer el archivo json: ', error)
        return null
    }
}
module.exports = getBookById