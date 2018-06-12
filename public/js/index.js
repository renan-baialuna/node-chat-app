var socket = io(); 

socket.on('connect', function(){
    console.log('conected to server')

})
socket.on('disconnect', function(){
    console.log('Disconected from server')
});

socket.on('newMessage', function(message) {
    console.log('newMessage', message)
});
