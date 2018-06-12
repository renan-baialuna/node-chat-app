const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', { 
        from: 'admin', 
        text: 'welcome to the chat app',
        createdAt: new Date().getTime()
    })

    socket.broadcast.emit('newMessage',{
        from:'admin',
        text: 'new guy',
        createdAt: new Date().getTime()
    })


    socket.on('createEmail', (newEmail) => {
        console.log('create email', newEmail);
    })

    socket.on('createMessage', (message) => {
        console.log('create email', message);

        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })
        /*
                socket.broadcast.emit('newMessage',{
                    from:message.from,
                    text: message.text,
                    createdAt: new Date().getTime()
                })
        */
    })

    socket.on('disconnect', () => {
        console.log('User was disconected from server')
    })
});

server.listen(port, () => {
    console.log(`server is up on ${port}`)
})
