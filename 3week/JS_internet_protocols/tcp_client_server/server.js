const net = require('net');

const server = net.createServer ((socket) => {

// socket is like a special object that gives us access to a server
// when request comes - it's sent to object 'Socket' which handles request

//when data is received on the server it will execture this callback function,
//and the data reveived will be passed as the argument 'data'
socket.on('data', (data) => {
    console.log(`data received from client: ${data}`);
    socket.write('Thank you for sending the data over');
  });
});

server.listen(5050, '127.0.0.1');
console.log('server is up and running on port 5000');
