var express = require('express');
var passwordHash = require('password-hash');

var router = express.Router();            // get an instance of the express Router
var User = require('../models/user');


router.get('/', function(req, res, next){
    var email = '';
    User.findOne({}, function(err, doc){
        if (err) {
            return res.send('Error');
        }
        if (doc) {
            email = doc.email;
        }
        res.send(email);
    });

});

// create a new user
router.post('/', function(req, res, next){
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: passwordHash.generate(req.body.password),
    });
    user.save(function(err, result){
        if (err) {
            return res.status(404).json({
                title: 'An error occured',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: result
        });
    });
});

/*
router.get('/list', function(req, res) {
    fs.readFile(__dirname + '/../models/user.json', 'utf8', function (err, data) {
    //      console.log(data);
            res.json(JSON.parse(data));
    });
       
});
*/

module.exports = router;