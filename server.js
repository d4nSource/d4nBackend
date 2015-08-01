// set up =================================================
var express = require('express');
var jwt = require('jsonwebtoken');
var morgan = require('morgan');
var mongoose = require('mongoose');
var path = require('path'); //handle path operation

var app = express();
var port = process.env.PORT || 3000;

var api = require('./server/routes/api');
var router = require('./server/routes/web');

// database connection ====================================

// mongoose.connect('mongodb://localhost/material');

// app Setup ==============================================

app.use(morgan('dev'));

// Server Route settings ==================================

app.use('/api', api);
app.use('/', router);
app.use(express.static('./public'));

app.use(function(req, res){
	res.status(404);
//	res.send('404: page not found');
	res.sendFile('404.html', {root: path.join(__dirname, './server/views')});
});

app.use(function(req, res, next){
	res.status(500);
	res.send('500: Internal Server Error');
});

app.listen(port);
console.log("App listening on port " + port);

module.exports = app;