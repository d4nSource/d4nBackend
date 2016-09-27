"use strict";

var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var passwordHash = require('password-hash');

var router = express.Router();            // get an instance of the express Router
// var User = require('../models/user');

var db = new sqlite3.Database('./database/database.sqlite3');

// get all users
router.get('/', function(req: any, res: any, next: any){

//    var users = [];
    var users: any = [];

    db.each("SELECT id, firstname, lastname, email FROM users", function(err: any, row: any) {
//      console.log(row.id + " - " + row.firstname + " " + row.lastname + "(" + row.email + ")");
    users[row.id] = {"firstname": row.firstname, "lastname": row.lastname, "email": row.email};
    });

//    db.run("INSERT into users VALUES ('2', 'Max', 'Mustermann', 'geheim', 'test@Mustermann.com')");
    db.close;

    res.send(users[1]);
});

/* create a new user
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

router.get('/list', function(req, res) {
    fs.readFile(__dirname + '/../models/user.json', 'utf8', function (err, data) {
    //      console.log(data);
            res.json(JSON.parse(data));
    });
       
});
*/

export = router;