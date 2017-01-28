var express = require('express');
var path = require('path');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var bodyParser = require('body-parser');
var routes = require('./router.js');

app.use(express.static(path.join(__dirname, '../client')));

var port = process.env.port || 8000;

// db
var dbURI = 'mongodb://localhost:27017/colors';

// middleware
app.use(bodyParser.json());

// routes
routes(app);

app.listen(port, () => {
  console.log(`AJAX with React listening on port# ${port}`);
})
