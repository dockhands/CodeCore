
function reverse (string) { 

  let backString = "";
  for ( i = string.length-1; i>=0; i--){ 
      backString += string[i];
  }
  return backString;
  };

const net = require('net');
const server = net.createServer((socket) => {
  // 'connection' listener
  console.log('client connected');
  socket.on('data', (data) => {
    // console.log(`data received from client: ${data}`);
    // socket.write('hello\r\n');
    
    //socket.write(data);
    socket.write(`Here's your input, sdrawkcab:  ${reverse(data.toString())}`);
    //console.log("write the data " + data);
  });
  
});
server.on('error', (err) => {
  throw err;
});
server.listen(5050, '127.0.0.1', () => {
  console.log('server is up and running on port 5050');

});