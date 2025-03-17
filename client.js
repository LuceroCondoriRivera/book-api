const net = require('net') //Importa el modulo "net" para manejar conexiones TCP. 
const { v4: uuidv4 } = require('uuid') // Importa la funcion uuidv4 para generar identificadores unicos .
// Crea una conexion TCP con el servidor en el puerto 8080 y la direccion 127.0.0.01 ( localhost ). 
const client = net.createConnection({ port: 8080, host: '127.0.0.1' }, () => {
    console.log("conectado al servidor")// Mensaje cuando la conexion es exitosa.
    
    const idv4 = uuidv4()// Genera un identificador unico ( UUID v4) .
    console.log('UUID V4: ', idv4) // Muestra el UUID generado en la consola .

// Maneja los datos recibidos del servidor.
    client.on('data', (data) => {
        console.log(`datos recibidos: ${data}`)// Imprime los datos recibidos en la consola .
    })
    // Maneja errores en la conexion .
    client.on('error', (err) => {
        console.log(err.message)// Imprime el mensaje de error en la consola.
        
    })

})


