const category = require('../controllers/categoryController');

const routes = (app) => {
  // Create a new Category
  app.post('/categories', category.createNewCategory);

  // Retrieve all Category
  app.get('/categories/', category.getAllCategories);

  // Delete a Category with Id
  app.delete('/categories/:id', category.deleteCategories);

  // Update a Category with Id
  app.put('/categories/:id', category.updateCategories);

  // Activate a Category
  app.put('/categories/:id/activate', category.activateCategories);

  // Deactivate a Category
  app.put('/categories/:id/deactivate', category.deactivateCategories);
};

module.exports = { routes };
