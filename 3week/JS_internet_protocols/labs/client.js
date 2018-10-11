
const net = require('net');
const readLine = require("readline");

//const client = net.Socket();

// takes in an object
const interface = readLine.createInterface ( { 
  input: process.stdin,  
  output: process.stdout
}); 




  

const client = net.Socket().connect(5050, '127.0.0.1', () => {
  // 'connect' listener
  console.log('connected to server!');
  interface.question('what string do you want to send me?', (string) => {     
    client.write(string);
  });  
  // client.write('world!\r\n');
  // client.write('world!\r\n');
});
client.on('data', (data) => {
  // console.log(`data received from server: ${data}`);
  // console.log(data.toString());
  console.log(`data received from server: ${data}`);
  client.end();
});

