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

constante fs = requerir('fs'); // Módulo nativo de Node.js para manipulacion de archivos.
constante camino  = requerir('camino');  // Módulo para manejar rutas de archivos de manera compatible con diferentes sistemas opertivos .
constante  autoresPath = camino.unirse(__nombredirectorio, '../datos/autores.json'); //Ruta del archivo JSON donde se almacenan los autores .

función obtenerAutores() {
    constante datos = fs.readFileSync(autoresPath); //Lee el archivo de manera síncrona.
    devolver JSON.analizar gramaticalmente(datos); // Convierte el contenido JSON en un array de objetos .
}

función añadirAutor(autor) {
    constante autores = obtenerAutores(); // Obtiene la lista actual de autores.
    autores.empujar(autor); // Agrega el nuevo autor al array.
    fs.escribirFileSync(autoresPath, JSON.convertir en cadena (autores, nulo, 2));// Guarda los cambios en el archivo JSON , con formato legible.
}

constante encontrarAutor = (consulta) => {
    constante autores = obtenerAutores(); // Obtiene la lista de autores.

    //Verifica que la consulta sea un string válido antes de hacer la busqueda.
    si (tipo de consulta  === 'cadena') {
        devolver autores.filtrar(autor => autor.nombre.a minúsculas().incluye(consulta.a minúsculas()) //Filtra autores cuyo nombre coincida ( sin importar mayúsculas - minúsculas ).
        );
    }
    devolver nulo;  // Retorna "null"si la consulta no es un string válido.
}

// Exporta las funciones para poder usarlas en otros archivos .
módulo.exportar = { obtenertAutores, agregarAutores, encontrarAutor };

