var express = require('express')
var fs      = require('fs');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.get('/list', function(req, res) {
    fs.readFile(__dirname + '/../models/user.json', 'utf8', function (err, data) {
            console.log(data);
            res.json(JSON.parse(data));
    });
       
});

module.exports = router;