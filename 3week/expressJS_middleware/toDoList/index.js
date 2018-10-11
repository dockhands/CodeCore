const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// this registers EJS as our default `view engine` meaning that when you 
// attempt to render templates, it will look for a matching file with `.ejs` extension
// with a folder named `views`
app.set("view engine", "ejs");

// LOGGER
app.use(morgan('dev'));

// BODY PARSER
app.use( (request, response, next) => {
  console.log('>>>>');
  console.log('>>>>');
  next();
});

// COOKIE PARSER
app.use(cookieParser());

//CUSTOM USERNAME MIDDLEWARE
app.use((request, response, next) => { 
    // the 'cookie-parser' middleware.
  console.log("🍪 🍪 🍪 🍪 🍪 🍪 ");
  console.log(request.cookies);
  console.log("🍪 🍪 🍪 🍪 🍪 🍪");
  
  const title = request.cookies.title;
  const bodyText = request.cookies.bodyText;

  // Properties set on 'response.locals' become variables in all
  // rendered templates. This means the 'username' can be used
  // as a variable inside the 'welcome.ejs' or any other template.
  response.locals.title = "";
  response.locals.bodyText= "";
  
  if (title) { 
    response.locals.title = title;
    // console.log(`🍪 Username is ... ${username}`);
  }
  
  if (bodyText) { 
    response.locals.bodyText= bodyText;
    // console.log(`🍪 Language selected as ${pref_language}`);
  }
  
  next();
  
  });


app.get('/hello-world', function (req, response) {
    response.send('Hello, World!');
  });

app.get('/reminder', function (req, response) {
    response.render('reminder');
  });

  app.get('/notes', function (req, response) {

    const _task = req.cookies.task;

    response.render('notes', {
        task: _task
    });

    // response.render('notes', {
    //     task: {
    //         title: "fake title",
    //         bodyText: "fake bodyte"
    //     }
    // });
  });


const COOKIE_MAX_AGE = 1000*60*60*24*7;
app.post("/notes", (request, response) => {
    

    const title = request.body.title;
    const bodyText = request.body.bodyText;
    console.log("Title => ", title)
    console.log("Body => ", bodyText)
    
    //const task = {};
  
    response.cookie("task", {title, bodyText}, {maxAge:COOKIE_MAX_AGE });
    // response.redirect("/language");

    // response.cookie("bodyText", bodyText, {maxAge:COOKIE_MAX_AGE });
    
    response.redirect('/notes');

        // response.render('notes', { 
        // title: title, 
        // bodyText: bodyText});
  });













const DOMAIN = 'localhost';
const PORT = '5000';
app.listen(PORT, DOMAIN, () => {
  console.log(`🖥 Server listenning on http://${DOMAIN}:${PORT}`);
});