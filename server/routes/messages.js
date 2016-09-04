var express = require('express')
// var fs      = require('fs')
var Message = require('../models/message');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:3000/changelog)

var Message = require('../models/message')

router.post('/', function(req, res, next){
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result){
        if (err) {
            return res.status(404).json({
                title: 'An error occured',
                error: err
            });
        }
        respond.status(201).json({
            message: 'Saved message',
            obj: result
        });
    });
});

/*router.get('/', function(req, res, next) {
    
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
*/
module.exports = router;