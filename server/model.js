var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  number : Number,
  item : String
});

//Create a model using the schema
var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
