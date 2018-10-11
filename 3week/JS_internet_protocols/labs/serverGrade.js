const http = require('http');
const url = require('url');


const server = http.createServer ( (request, response) => { 

    //const params below: 
//this parses the HTTP params (anything after the '?' in the URL)
// what we get back, is an JS object, based onthe query, for instance: 
//if the user makes a request to http://.../abc?name=john&age=10, then 
//params will looks likel {name:"John, age:"10"}
  
const params = url.parse(request.url, true).query;

let score = parseInt(params.score); 
let letter = "F";

function convertScore (number) {
console.log("inside convert score is : " + number);
if (number > 85) {
letter = "A";
} else {
 letter = "D";
}
return letter; 
};

  

   // console.log(params.score);

    response.writeHead(200, {'Content-Type': 'text/html' });
    response.write(`<!DOCTYPE html>
                    <html> 
                    <head> 
                        <title> First Node.js HTTP</title>
                    </head>
                    <body> 
                        <h1> Welcome to the Dan Grader </h1>
                        <h2> Your score of ${score} is the letter grade = ${convertScore(score)} </h2>
                    </body>
                    </html>
                    `);

                    response.end(); // send the respone with head and body above to client
});




server.listen(8080);
console.log("HTTP server up and running on port 8080");