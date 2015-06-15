/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />

var express = require('express');
var router = express.Router();

 // api ---------------------------------------------------
 router.get('/api/', function (req, res, next) {

 });

  // application--------------------------------------------
 router.get('/', function(req, res) {
   
    var options = {
      root: __dirname + '/public/',
      dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    };
        res.sendFile('index.html', options); // load the single view file
 });
   
 module.exports = router;