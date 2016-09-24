var tables = require('../data/table-data.js');
var waitlist = require('../data/waitinglist-data.js');
var path = require('path');

module.exports = function(app) {
    app.get('/api/tables', function(req, res) {
        res.json(tables);
    });

    app.get('/api/waitlist', function(req, res) {
        res.json(waitlist);
    });

    // Create New Characters - takes in JSON input
	app.post('/api/tables', function(req,res){
      if (tables.length < 5) {
          tables.push(req.body);
          res.json(true);
      }
      else {
          waitlist.push(req.body);
          res.json(false);
      }
  });
};
