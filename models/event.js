'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ MeetGreet, SetTime }) {
      // meet and greets
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greets"
      })

      // set times 
      Band.hasMany(SetTime, {
        foreignKey: "band_id",
        set_times: "set_times"
      })
    }
  }
  Event.init({
    event_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    event_name: DataTypes.STRING,
    date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  });
  return Event;
};