module.exports = (sequelize, DataTypes) => {
  const Invoices = sequelize.define('Invoices', {
    invoice_serial: DataTypes.STRING,
    invoicer_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE,
  });
  return Invoices;
};
