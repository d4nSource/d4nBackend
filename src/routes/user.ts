"use strict";

var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var passwordHash = require('password-hash');

var router = express.Router();            // get an instance of the express Router
// var User = require('../models/user');

//
var db_status:Boolean = true; 

var db = new sqlite3.Database('./database/database.sqlite3', function(err: String){
    if (err) {
        db_status = false;
    }
});

// get a single user
router.get('/', function(req: any, res: any, next: any){

    if (db_status) {
        db.get("SELECT id, firstname, lastname, email FROM users where id=1", function(err: any, row: any){
            res.status(200).json({
                "firstname": row.firstname, 
                "lastname": row.lastname, 
                "email": row.email});
        });
        db.close;   
    } else {
        res.status(500).json({
                "status": "error",
                "text": "error opening the datbase"
        });
    }
});

// create a new user
router.post('/', function(req: any, res: any, next: any){
    db.run("INSERT into users VALUES ('2', 'Max', 'Mustermann', 'geheim', 'test@Mustermann.com')");
});


// get all users available
router.get('/listall', function(req: any, res: any) {
    db.all('SELECT id, firstname, lastname, email FROM users', function(err: string, row: any){
        console.log(row.length)
        res.status(200).json({
            "firstname": row[0].firstname
        })
    }); 
});

export = router;