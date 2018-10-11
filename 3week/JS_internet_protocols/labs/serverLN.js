
// Write a TCP client and a server application in Node.js:

// The client should take a string input of comma delimited numbers from the user (e.g. "1,2,3,4,5,6,7,8,9") and send it to the server.
// The server should respond with the largest number. (e.g. given "1,2,3,4,5,6,7,8,9" responds with 9)
// The client should print the server response in the console.

// function to find largest Number

function largestNumber (string) { 


    let numberArray = string.map(Number);
   
    let bigNum = numberArray[0]; 
    for (let value of numberArray) { 

        if (value > bigNum) { 
    
            bigNum = value; 
        }
    }
    return bigNum;
    };
  const net = require('net');
  const server = net.createServer((socket) => {
    // 'connection' listener
    console.log('client connected');
    socket.on('data', (data) => {
      // console.log(`data received from client: ${data}`);
      // socket.write('hello\r\n');
      data = data.toString().split(","); 

      //socket.write(data);
     // socket.write(`Biggest number you gave me was:  ${reverse(data.toString())}`);
      socket.write(`Largest number is :  ${largestNumber(data)}`);
      //console.log("write the data " + data);
    });
    
  });
  server.on('error', (err) => {
    throw err;
  });
  server.listen(5080, '127.0.0.1', () => {
    console.log('server is up and running on port 5080');
  
  });