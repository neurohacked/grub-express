var friends = require('../data/grub.js');
var path = require('path');

module.exports = function(app){
	app.get('/api/tables', function(req, res){
		res.json(grub);
	});

	app.post('/api/waitlist', function(req, res){
		grub.push(req.body);
	});
}
