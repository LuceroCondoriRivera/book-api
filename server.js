const net = require('net')
const { v4: uuidv4 } = require('uuid')

const server = net.createServer((Socke) => {
    const idv4 = uuidv4()
    console.log('conexion exitosa')
    console.log('UUID V4: ', idv4)

    Socke.on / ('data', (data) => {
        console.log(`datos recibidos ${data}`)
    })
    Socke.on('end', () => {
        console.log('comunicacion terminada')
    })
})

server.listen(8080, () => {
    console.log('servidor escuchando en el puerto 8080')
}
)

