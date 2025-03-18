constante  net = requerir('net')// Importa el modulo "net" para crear un servidor TCP .
constante  { versión 4: uuidv4 } = requerir('uuid')// Importa la funcion uuidv4 para generar identificadores unicos .
// Crea un servidor TCP.
constante servidor = neto.crearServidor((Zócalo) => {
    constante versión 4 = uuidv4() // Genera un identificador unico ( uuidv4).
    consola.registro('conexión exitosa')//Mensaje cuando el cliene se conecta .
    consola.registro('UUID V4: ', versión 4) //Muestra el UUID generado en la consola .
//Maneja los datos recibidos del cliente.
    Zócalo.en / ('data', (data) => {
        consola.registro(`datos recibidos${datos}`)
//Maneja la finalizacion de la conversacion .        
Zócalo.en('fin', () => {
        consola.registro('comunicación terminada')
    })
})
//Hace que el servidor escuche en el puerto 8080.
servidor.escuchar(8080, () => {
    consola.registro('servidor escuchando en el puerto 8080')
}
)

