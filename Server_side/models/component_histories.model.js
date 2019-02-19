module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line camelcase
  const Component_histories = sequelize.define('Component_histories', {
    component_id: DataTypes.INTEGER,
    assignee: DataTypes.INTEGER,
    assign_date: DataTypes.DATE,
    assign_by: DataTypes.INTEGER,
    resolved_date: DataTypes.DATE,
    resolved_by: DataTypes.STRING,
    deletedAt: DataTypes.DATE,
  });
  // eslint-disable-next-line camelcase
  return Component_histories;
};
