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
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id'})
    }
  }
  Event.init({
    title: {
     type: DataTypes.STRING,
    },
    date: {
     type: DataTypes.DATE,
    },
    user_id: {
     type: DataTypes.INTEGER,
     references: {
       model: 'User',
       key: 'id'
     }
    },
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
