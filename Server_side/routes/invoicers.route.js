const invoicer = require('../controllers/invoicers.controller');

const routes = (app) => {
  app.post('/invoicers', invoicer.createNewInvoicers);
  app.get('/invoicers/', invoicer.getAllInvoicers);
  app.put('/invoicers/:id', invoicer.updateInvoicers);
  app.delete('/invoicers/:id', invoicer.deleteInvoicers);
  app.put('/invoicers/:id/activate', invoicer.activateInvoicers);
  app.put('/invoicers/:id/deactivate', invoicer.deactivateInvoicers);
};
module.exports = { routes };
