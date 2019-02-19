module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line camelcase
  const Incident_updates = sequelize.define('Incident_updates', {
    incident_id: DataTypes.INTEGER,
    updateBy: DataTypes.INTEGER,
    updates: DataTypes.STRING,
    deletedAt: DataTypes.DATE,
  });
  return Incident_updates;
};
