var express = require('express')
var User = require('../models/user');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

//POST Route sample
router.post('/', function (req, res, next){
    res.redirect('/'); 
});

// more routes for our API will happen here

module.exports = router;