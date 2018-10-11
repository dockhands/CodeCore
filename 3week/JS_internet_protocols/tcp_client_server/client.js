const net = require('net');

const client = net.Socket();

// waiting for a response from the server 
client.on('data', (data) => {
  console.log(`data received from server: ${data}`);
});

//initialize connection with the backend server
client.connect(5050, '127.0.0.1', () => {
  client.write('Hello from the user or client');
});