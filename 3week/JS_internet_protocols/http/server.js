const http = require('http');
const url = require('url');


const server = http.createServer ( (request, response) => { 

    //const params below: 
//this parses the HTTP params (anything after the '?' in the URL)
// what we get back, is an JS object, based onthe query, for instance: 
//if the user makes a request to http://.../abc?name=john&age=10, then 
//params will looks likel {name:"John, age:"10"}
  
const params = url.parse(request.url, true).query;
    let farenheitTemp = params.temp;
    let celsiusTemp = ((params.temp-32)/1.8);
   // let celsiusTemp = farenheitTemp;
    console.log(celsiusTemp);

    response.writeHead(200, {'Content-Type': 'text/html' });
    response.write(`<!DOCTYPE html>
                    <html> 
                    <head> 
                        <title> First Node.js HTTP</title>
                    </head>
                    <body> 
                        <h1> Welcome to the Dan Den Temperature Machine. </h1>
                        <h2> ${params.temp} F = ${celsiusTemp}C </h2>
                    </body>
                    </html>
                    `);

                    response.end(); // send the respone with head and body above to client
});




server.listen(8080);
console.log("HTTP server up and running on port 8080");