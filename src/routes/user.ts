"use strict";

var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var bcrypt = require('bcryptjs');
var uuid = require('node-uuid');
var jwt = require('jsonwebtoken');

var router = express.Router();            // get an instance of the express Router
var User = require('../models/user');

var db_status:Boolean = true; 

var db = new sqlite3.Database('./database/database.sqlite3', function(err: String){
    if (err) {
        db_status = false;
    }
});

// signin a user
router.post('/signin', function(req: any, res: any, next: any){
    console.log(JSON.stringify(req.body));

    if (db_status && req.body.email) {
        db.get("SELECT id, nickname, firstname, lastname, email, password FROM users where email='"+ req.body.email +"'", function(err: any, row: any){
            if (row.email) {
                if (!bcrypt.compareSync(req.body.password, row.password)){
                    return res.status(401).json({
                    "title": "Login failed",
                    "error": "password is wrong"
                    });
                } else {
                    let token = jwt.sign({user: row.id }, 'secretkey', {expiresIn: 7200});
                    res.status(200).json({
                        "message": "successful logged in", 
                        "token": token 
                    });
                }
            } else {
                return res.status(401).json({
                    "title": "Login failed",
                    "error": "user not found"
                    });
            }
        });
        db.close;  
        } else {
            return res.status(500).json({
                    "title": "Login failed",
                    "error": "User could not be found or password is wrong"
            });
    } 
});

// below this line, only authenticated users are able to access this route
router.use('/new', function(req: any, res: any, next: any){
    jwt.verify(req.query.token, 'secretkey', function(err: any, decoded: any) {
        console.log('not authenticated');
        if (err) {
            return res.status(401).json({
                title: 'not authenticated',
                error: err
            });
        }
        next();
    })
});

// get a single user
router.get('/', function(req: any, res: any, next: any){
    if (db_status) {
        db.get("SELECT id, firstname, lastname, email FROM users where id=3", function(err: any, row: any){
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
router.post('/new', function(req: any, res: any, next: any){
    if (db_status) {
        let unique_uid = uuid.v1(); 
        db.run("INSERT into users (id, nickname, firstname, lastname, password, email) VALUES ('"+ unique_uid +"', '"+ req.body.nickname +"','"+ req.body.firstname +"', '"+ req.body.lastname +"', '"+ bcrypt.hashSync(req.body.password, 10) +"', '"+ req.body.email +"')");
        res.status(201).json({
            title: 'User created'
        });
    } else {
        res.status(500).json({
                "status": "error",
                "text": "error opening the database"
        });
    }
});




// get all users available
router.get('/all', function(req: any, res: any) {
    db.all('SELECT id, firstname, lastname, email FROM users', function(err: string, rows: Array<any>){
        res.status(200).json(rows);
    }); 
});

export = router;