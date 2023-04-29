const express = require ('express')
const app = express()

const path = require('path')

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)

io.on('connection', (socket) => {
    // Procedimiento 1:
    console.log('Un usuario se ha conectado')

    //Procedimiento 2:
    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado')
    })

    // // Procedimiento 3:
    socket.on('chat', (msg) => {
        console.log('Mensaje: ' + msg)
    })

    // // Procedimiento 4:
    socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })

    // Numero 2
    socket.on('chat2', (msg2) => {
        console.log('Mensaje 2: ' + msg2)
    })

    // Procedimiento 4:
    socket.on('chat2', (msg2) => {
        io.emit('chat2', msg2)
    })
})
// dirname : ruta donde se ejecuta el archivo app.js
// app.use(express.static(path.join(__dirname, '/cliente/')))

// app.get('/', (req, resp) => {
//     resp.sendFile(`${__dirname}/cliente/index.html`)
// })

// app.get('/chat', (req, resp) => {
//     resp.sendFile(`${__dirname}/chat_view.html`)
// })

app.use(express.static(path.join(__dirname, '/')))

server.listen(3000,() => {
    console.log('Servidor corriendo en http://localhost:3000')
})