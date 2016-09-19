var express = require('express')
var fs      = require('fs')

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:3000/changelog)
router.get('/', function(req, res, next) {
    
    fs.readFile(__dirname + '/../models/changelog.json', 'utf8', function (err, data) {
            if (err) {
                return res.status(404).json({
                    "title": 'An error occured',
                    "error": err
                });
            }
            return res.status(200).json(JSON.parse(data));
    });
});

module.exports = router;