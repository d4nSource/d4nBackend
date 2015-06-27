/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />

var express = require('express');

module.exports = (function() {
	'use strict';
	
	var router = express.Router();
	
	router.get('/', function (req, res) {
		res.send('index');
	});
	return router;
})();