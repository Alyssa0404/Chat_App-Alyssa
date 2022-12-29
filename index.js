const path = require('path')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const { generateMsg } = require('./utilities')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./user-util')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 8080
const publicDirPath = path.join(__dirname, './public')

app.use(express.static(publicDirPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

  
})

server.listen(port, () => console.log(`Server is up on port ${port}!`))