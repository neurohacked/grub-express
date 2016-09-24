// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});

// Links to our html routes

require('./app/routing/routes-api.js')(app);
require('./app/routing/routes-html.js')(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

