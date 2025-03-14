const net = require('net')
const { v4: uuidv4 } = require('uuid')

const client = net.createConnection({ port: 8080, host: '127.0.0.1' }, () => {
    console.log("conectado al servidor")
    const idv4 = uuidv4()
    console.log('UUID V4: ', idv4)

    client.on('data', (data) => {
        console.log(`datos recibidos: ${data}`)
    })
    client.on('error', (err) => {
        console.log(err.message)
    })

})


