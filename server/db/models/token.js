'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' })
    }
  }
  Token.init({
    refresh_tokes: DataTypes.STRING(3000),
    user_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    } 
  }, {
    sequelize,
    modelName: 'Token',
  });
  return Token;
};
