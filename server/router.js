var controllers = require('./controllers.js');

module.exports = function(app) {
  app.post('/api/testAdd', controllers.addOne);
  app.get('/api/testGet', controllers.getAll);
}
