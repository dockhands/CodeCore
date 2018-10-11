
const net = require('net');
const readLine = require("readline");

//const client = net.Socket();

// takes in an object
const interface = readLine.createInterface ( { 
  input: process.stdin,  
  output: process.stdout
}); 


const client = net.Socket().connect(5080, '127.0.0.1', () => {
  // 'connect' listener
  console.log('connected to server!');
  interface.question('give me a string of numbers please ', (string) => {     
    client.write(string);
  });  
  // client.write('world!\r\n');
  // client.write('world!\r\n');
});

//data received from the server 
client.on('data', (data) => {
  // console.log(`data received from server: ${data}`);
  console.log(`data received from server: ${data}`);

  client.end();
});
