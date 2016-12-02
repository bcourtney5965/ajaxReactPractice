var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient
var format = require('util').format;

var port = process.env.port || 8000;

// db
var dbURI = 'mongodb://localhost:27017/colors';


// middleware
// routes

app.listen(port, () => {
  console.log(`AJAX with React listening on port# ${port}`)
})
