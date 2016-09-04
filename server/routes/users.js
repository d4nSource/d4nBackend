var express = require('express')
var fs      = require('fs');

var router = express.Router();              // get an instance of the express Router
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

router.post('/', function(req, res, next){
    var user = new User({
        firstName: "Dorian",
        lastName: "Szekely",
        email: "test@tes.copm",
        password: "123456",
    });
    user.save();
})

/*
router.get('/list', function(req, res) {
    fs.readFile(__dirname + '/../models/user.json', 'utf8', function (err, data) {
    //      console.log(data);
            res.json(JSON.parse(data));
    });
       
});
*/

module.exports = router;