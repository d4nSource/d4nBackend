"use strict";
var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var passwordHash = require('password-hash');
var router = express.Router(); // get an instance of the express Router
// var User = require('../models/user');
var db = new sqlite3.Database('./database/database.sqlite3');
// get all users
router.get('/', function (req, res, next) {
    var users;
    db.each("SELECT id, firstname, lastname, email FROM users where id=1", function (err, row) {
        //users= {"firstname": row.firstname, "lastname": row.lastname, "email": row.email};
        res.json({"firstname": row.firstname, "lastname": row.lastname, "email": row.email});
    });
    //    db.run("INSERT into users VALUES ('2', 'Max', 'Mustermann', 'geheim', 'test@Mustermann.com')");
    db.close;
});
module.exports = router;
