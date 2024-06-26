'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.work_orders, { foreignKey: "woro_user_id" });
    }
  }
  users.init({
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    schema : 'HR',
    modelName: 'users',
  });
  return users;
};