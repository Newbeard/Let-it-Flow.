'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event, Order, Cart, Token }) {
      this.hasMany(Event, { foreignKey: 'user_id' })
      this.hasMany(Order, { foreignKey: 'user_id' })
      this.hasMany(Cart, { foreignKey: 'user_id' })
      this.hasMany(Token, { foreignKey: 'user_id' })
    }
  }
  User.init({
    first_name: {
     type: DataTypes.STRING,
     allowNull: false
    },
    last_name: {
     type: DataTypes.STRING,
     allowNull: false
    },
    email: {
     type: DataTypes.STRING,
     allowNull: false
    },
    phone: {
     type: DataTypes.STRING,
    },
    password: {
     type: DataTypes.STRING,
     allowNull: false
    },
    admin: {
     type: DataTypes.BOOLEAN,
     defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
