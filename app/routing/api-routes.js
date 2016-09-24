var tables = require('../data/table-data.js');
var waitlist = require('../data/waitinglist-data.js');
var path = require('path');

module.exports = function(app){
	app.get('/api/tables', function(req, res){
		res.json(tables);
	});

	app.get('/api/waitlist', function(req, res){
		res.json(waitlist);
	});

	// app.post('/api/waitlist', function(req, res){
	// 	grub.push(req.body);
	// });
};
