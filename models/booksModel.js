//Importamos el modulo fs de Node.js para realizar operaciones de archivos.

constante fs = requerir('fs')
//Importamos el módulo 'path'para manejar rutas de archivos de forma segura .
constante camino = requerir camino('camino')
//Definimos la ruta del ejercicio JSON donde se almacenan los libros.
constante ruta de archivo = camino.unirse(__nombredirectorio, './libros.json')

constante obtenerLibroPorId = (identificación) => {
    intentar {
        constante datos = fs.readFileSync(ruta de archivo, 'utf-8') //Leemos el contenido del archivo books.json de forma síncrona.
        constante libros = JSON.analizar gramaticalmente(datos) // Parseamos el contenido JSON para convertirlo en un array de objetos .
        devolver libros.encontrar(libro => libro.identificación === identificación) || nulo  //Buscamos el libro cuyo ID coincida con el proporcionado.
    } atrapar (error) {
        consola.error('error al leer el archivo json: ', error) // Capturamos cualquier error al leer el archivo ao a parsear el JSON.
        devolver nulo
    }
}
módulo.exportaciones = obtenerLibroPorId // Exportamos la función para que pueda ser utilizada en otros módulos.
