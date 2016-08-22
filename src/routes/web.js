var express = require('express');
var path = require('path');

module.exports = (function() {
	'use strict';
	
	var router = express.Router();
	
	router.get('/', function (req, res) {
//		res.send('index');
		res.sendFile('index.html', {root: path.join(__dirname, '../../public')});
	});
	return router;
})();