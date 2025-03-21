const net = require('net') // Importa el modulo "neto" para crear un servidor TCP .

const { v4: uuidv4 } = require('uuid') // Importa la funcion uuidv4 para generar identificadores unicos .

// Crea un servidor TCP.

const server = net.createServer((Socke) => {
    const idv4 = uuidv4() // Genera un identificador unico ( uuidv4).

    console.log('conexion exitosa')//Mensaje cuando el cliene se conecta .

    console.log('UUID V4: ', idv4)//Muestra el UUID generado en la consola .

    //Maneja los datos recibidos del cliente.

    Socke.on / ('data', (data) => {
        console.log(`datos recibidos ${data}`)
    })

    Socket.on('error', (err) => {
        console.log(err.message)
    })
    //Maneja la finalizacion de la conversacion .  
    Socke.on('end', () => {
        console.log('comunicacion terminada')
    })


    Socke.on('end', () => {
        console.log('comunicacion terminada')
    })
})

server.listen(8080, () => {
    console.log('servidor escuchando en el puerto 8080')
}
)

