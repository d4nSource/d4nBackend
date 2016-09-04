// BASE SETUP
// =============================================================================
// call the packages we need
var express     = require('express');        // call express
var server      = express();                 // define our app using express
var bodyParser  = require('body-parser');    // handle HTTP header informations

//include routes defintions
var changelog   = require('./routes/changelog');
var router      = require('./routes/api');
var user        = require('./routes/user');

server.use(bodyParser.json());                          // handles JSON data
server.use(bodyParser.urlencoded({ extended: false}));  // handles GET/POST like forms

// configure app to use bodyParser()
// this will let us get the data from a POST
// Middleware
server.use(function (req, res, next) {
  // allow origin for demo purposes
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');        
  res.setHeader('Access-Control-Allow-Origin', '*');  //allow ressources fetched from all webserver (like Angular 2 FE server)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

var port = process.env.PORT || 3000;        // set our port to 3000 of no env variable PORT is set

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
server.use('/api', router);
server.use('/changelog', changelog);
server.use('/user', user);

// START THE SERVER
// =============================================================================
server.listen(port);
console.log('API Server runs on port: ' + port);