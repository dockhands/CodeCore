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
  
  const username = request.cookies.username;

  const pref_language = request.cookies.pref_language;

  // Properties set on 'response.locals' become variables in all
  // rendered templates. This means the 'username' can be used
  // as a variable inside the 'welcome.ejs' or any other template.
  response.locals.username = "";
  response.locals.pref_language = "";
  
  if (username) { 
    response.locals.username = username;
    // console.log(`🍪 Username is ... ${username}`);
  }
  
  if (pref_language) { 
    response.locals.pref_language= pref_language;
    // console.log(`🍪 Language selected as ${pref_language}`);
  }
  
  next();
  
  });

  const COOKIE_MAX_AGE = 1000*60*60*24*7;

  app.post("/homepage", (request, response) => {
    

    const username = request.body.username;
    const pref_language = request.body.pref_language;
    console.log("pref_language => ", pref_language)
    console.log("user name => ", username)
    // 'response.cookie (<cookie-name), <cookie-value>, <options>)
    // The above method is added to the 'response' object by the cookie 
    response.cookie("username", username, {maxAge:COOKIE_MAX_AGE });
    // response.redirect("/language");

    response.cookie("pref_language", pref_language, {maxAge:COOKIE_MAX_AGE });
    response.redirect("/homepage");

  });



  app.get('/homepage', (request, response) => {
    response.render('homepage');
  });

  app.get('/language', (request, response) => {
    response.render('language');
  });






app.get('/hello-world', function (req, res) {
    res.send('Hello, World!');
  });

const DOMAIN = 'localhost';
const PORT = '4646';
app.listen(PORT, DOMAIN, () => {
  console.log(`🖥 Server listenning on http://${DOMAIN}:${PORT}`);
});
