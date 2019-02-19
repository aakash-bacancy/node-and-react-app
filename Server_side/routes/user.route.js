const users = require('../controllers/user.controller');

const routes = (app) => {
  app.get('/users/', users.list);
  app.post('/users', users.create);
  app.put('/users/:id', users.edit);
  app.put('/users/:id/activate', users.active);
  app.put('/users/:id/deactivate', users.deactive);
  app.delete('/users/:id', users.delete);
};

module.exports = { routes };
