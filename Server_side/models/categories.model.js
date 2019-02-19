module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    categoryName: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE,
  });
  // eslint-disable-next-line no-unused-vars
  // Categories.associate = function(models) {
  //   // associations can be defined here
  // };
  return Categories;
};
