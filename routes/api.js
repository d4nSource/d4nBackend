/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />
/// <reference path="../typings/jsonwebtoken/jsonwebtoken.d.ts" />

var express = require('express');
var jwt = require('jsonwebtoken');

module.exports = (function() {
	'use strict';
	
	var api = express.Router();
	
	api.use(function (req, res, next){
		var token = req.body.token || req.query.token || req.headers['x-access-token'];

	  	// decode token
	  	if (token) {
	
	    // verifies secret and checks exp
	    jwt.verify(token, 'superSecret', function(err, decoded) {      
	      if (err) {
	        return res.json({ success: false, message: 'Failed to authenticate token.' });    
	      } else {
	        // if everything is good, save to request for use in other routes
	        req.decoded = decoded;    
	        next();
	      }
	    });
	
	  	} else {
	
	    // if there is no token
	    // return an error
	    return res.status(403).send({ 
	        success: false, 
	        message: 'No token provided.' 
   			});
    
  		}
	});
	
	api.route('/genericCall')
	
	.get(function (req, res) {
		res.json({value: 'hallo welt'});
	})	
	.delete(function (req, res) {
		res.json({	action: 'delete',
					status: 'item deleted'});
	})	
	.put(function (req, res){
		res.json({	action: 'update',
					status: 'item updated'});
	})	
	.post(function (req, res){
		res.json({	action: 'create', 
					status: 'item created'});
	});
	
	api.route('/genericCall/:id')
		.post(function (req, res){
			res.json({ status: 'done' + req.params.id});
		});
		
	api.route('/authenticate')
		.post(function (req, res){
			var token = jwt.sign('test', 'supersecret', {
				expiresInMinutes :1440
			});
			res.json({
				success : true,
				message : 'sucessful',
				token: token
			});
		});
		
	return api;
})();