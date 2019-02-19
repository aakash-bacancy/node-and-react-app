module.exports = (sequelize, DataTypes) => {
  const Invoicers = sequelize.define('Invoicers', {
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE,
  });
  return Invoicers;
};
