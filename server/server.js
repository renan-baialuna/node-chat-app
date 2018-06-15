const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message')

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', generateMessage('Admin', 'welcome to the chat app'));

    socket.broadcast.emit('newMessage',generateMessage('Admin', 'new user join'))


    socket.on('createEmail', (newEmail) => {
        console.log('create email', newEmail);
    })

    socket.on('createMessage', (message, callback) => {
        console.log('create email', message);

        io.emit('newMessage', generateMessage(message.from, message.text))
        callback();
    })

    socket.on('createLocationMessage', (coords) =>{
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
    })

    socket.on('disconnect', () => {
        console.log('User was disconected from server')
    })
});

server.listen(port, () => {
    console.log(`server is up on ${port}`)
})
