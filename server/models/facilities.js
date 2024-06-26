'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class facilities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      facilities.hasMany(models.work_order_details, { foreignKey: "wode_faci_id"});
    }
  }
  facilities.init({
    faci_id: DataTypes.INTEGER
  }, {
    sequelize,
    schema : 'HR',
    modelName: 'facilities',
  });
  return facilities;
};