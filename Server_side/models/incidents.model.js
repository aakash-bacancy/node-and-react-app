module.exports = (sequelize, DataTypes) => {
  const Incidents = sequelize.define('Incidents', {
    component_id: DataTypes.INTEGER,
    incident: DataTypes.TEXT,
    incident_by: DataTypes.INTEGER,
    resolved_by: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE,
  });
  return Incidents;
};
