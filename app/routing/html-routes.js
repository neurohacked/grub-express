var path = require('path');

module.exports = function(app){

	app.get('/reserve', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/reserve.html'));
	});

	app.get('/tables', function(req,res){
		res.sendFile(path.join(__dirname + '/../public/tables.html'));
	});

	//if no matching route or if they are at home page
	app.use(function(req,res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};
