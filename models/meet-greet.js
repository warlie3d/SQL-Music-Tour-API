'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet - greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  meet - greet.init({
    meet_greet_id: DataTypes.INTEGER,
    event_id: DataTypes.SMALLINT,
    band_id: DataTypes.SMALLINT,
    meet_start_time: DataTypes.DATE,
    meet_end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'meet-greet',
  });
  return meet - greet;
};