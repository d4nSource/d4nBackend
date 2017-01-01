var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var bcrypt = require('bcryptjs');
var uuid = require('uuid');
var jwt = require('jsonwebtoken');

var router = express.Router();            // get an instance of the express Router

var db_status:Boolean = true; 

var db = new sqlite3.Database('./database/database.sqlite3', function(err: String){
    if (err) {
        db_status = false;
    }
});

// below this line, only authenticated users are able to access this route
//router.use('/new', function(req: any, res: any, next: any){
//    jwt.verify(req.query.token, 'secretkey', function(err: any, decoded: any) {
//        console.log('not authenticated');
//        if (err) {
//            return res.status(401).json({
//                title: 'not authenticated',
//                error: err
//            });
//        }
//        next();
//    })
//});

// get a single server
router.get('/', function(req: any, res: any, next: any){
    if (db_status) {
        db.get("SELECT id, hostname, ip FROM Server WHERE id='00000109-0000-0010-8000-00AA006D2EA4'", function(err: any, row: any){
            res.status(200).json({
                "id": row.id, 
                "hostname": row.hostname, 
                "ip": row.ip});
        });
        db.close;   
    } else {
        res.status(500).json({
                "status": "error",
                "text": "error opening the datbase"
        });
    }
});

// get all users available
router.get('/all', function(req: any, res: any) {
    db.all('SELECT * FROM Server', function(err: string, rows: Array<any>){
        res.status(200).json(rows);
        if (err) {
            res.status(500).json({
                "status": "error",
                "text": "error opening the datbase",
                "error": err
            })
        }
    }); 
});

export = router;