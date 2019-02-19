// eslint-disable-next-line import/newline-after-import
module.exports = (sequelize, DataTypes) => {
  const Components = sequelize.define('Components', {
    invoice_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    serial_no: DataTypes.INTEGER,
    componentName: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    isAssigned: DataTypes.BOOLEAN,
    isTrashed: DataTypes.BOOLEAN,
    assignedBy: DataTypes.INTEGER,
    assignedTo: DataTypes.INTEGER,
  });

  return Components;
};
