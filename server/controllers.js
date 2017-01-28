var Item = require('./model.js');

exports.addOne = function(req, res) {
  // var item = new Item();
  console.log('inside addOne');
  console.log(`req.body.from = ${req.body.from}`);
  res.status(200);
  res.json({"from":"server/addone"});
}

exports.getAll = function(req, res) {
  console.log('get all');
}