const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const url = require('url');





app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(morgan('dev'));


app.use( (request, response, next) => {
  console.log('>>>>');
  console.log('>>>>');
  next();
});


app.get('/', (request, response) => {
    response.render('home'); 
    
  });





  app.get('/fizz_buzz', (request, response) => {
    console.log('=========== MAKING GET request ');
    
    
    // let params = url.parse(request.url, true).query;
    // console.log("this is the params = " + params);
    
  // eg. http://localhost:5000/fizz_buzz?fizz=10&buzz=5

    let fizzNum = request.query.fizz;
    let buzzNum = request.query.buzz;

    console.log("this is the string = " + fizzNum);
    console.log("this is the trypeof fizz string = " + typeof fizzNum);

    console.log("this is the string = " + buzzNum);
    console.log("this is the trypeof fizz string = " + typeof buzzNum);
    
    
    
    response.render('fizz_buzz',{fizzNum, buzzNum} ); 
    
  console.log('===========this is the fizz number: ');
  console.log(fizzNum);



  });
  
  app.post('/fizz_buzz', (response, request) => {
    
    //if the user makes a request to http://.../abc?fizz=10  
    console.log('=========== MAKING POST ');
    // const params = url.parse(request.url, true).query;
    // let fizzNum = parseInt(params.fizz); 

    console.log('===========this is the fizz number inside POST : ');
    console.log(request.body.fizzNum);

    response.render('fizz_buzz',{fizzNum}); 
  });









  app.get('/random_person', (request, response) => {
    response.render('random_person',{winner: ""} ); 
    
  });
  
app.post('/random_person', (req, res) => {
    // const {carYear, carName, carPrice} = req.body;
    const nameString = req.body.fieldNames;
    var nameArray = nameString.split(',');
    console.log('===========these are the names: ');
    console.log(nameArray);
    let winner = nameArray[Math.floor(Math.random()*nameArray.length)];

    console.log('===========random winner ');
    console.log(winner);
   
    
    // console.log(" ================================");
    // console.log("this is the car year => ", carYear);
    // console.log(" ================================");
    
    res.render('random_person',  {winner});
    
  });



app.get('/car_status', (request, response) => {
    
    response.render('car_status', {carType: ""}); 
  
});


app.post('/car_status', (req, res) => {
    // const {carYear, carName, carPrice} = req.body;
    const carYear = req.body.carYear;
    
    console.log('===========car year is ');
    console.log(carYear);
    // console.log(" ================================");
    // console.log("this is the car year => ", carYear);
    // console.log(" ================================");
    
    
    let carType = "normal"
    if (carYear >2010 && carYear <2019) {
        carType = "new";
    }else if (carYear > 2019) {
        carType = "future";
    }else if (carYear < 2010) {
        carType = "old";
    } 
    
    
    res.render('car_status',  {carType});
    
  });



// app.get('/', (request, response) => {
  
//     const name = request.query.name;
//     // this will render a file called: welcome.ejs (because ejs is our default view engine)
//   // within a folder called `views` (by convention)
//   response.render('welcome', {
      
// });



// app.get('/survey', (request, response) => {
//     response.render('survey');
//   });


  
app.use( (request, response, next) => {
  console.log('#####');
  console.log('#####');
  next();
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running ð¤ on port ${PORT}`);
});