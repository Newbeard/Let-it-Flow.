'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {

    static associate({ Bouquet, User, Order }) {
      this.belongsToMany(Bouquet, { through:'Cart_order' })
      this.belongsTo(User, { foreignKey: 'user_id' })
      this.belongsToMany(Order, { through: 'Cart_order' })
    }
  }
  Cart.init({
    bouquet_id: {
     type: DataTypes.INTEGER,
     references: {
       model: 'Bouquet',
       key: 'id'
     }
    },
    count: {
     type: DataTypes.INTEGER,
    },
    isActive: {
     type: DataTypes.BOOLEAN,
     defaultValue: true
    },
    uuid: {
      type: DataTypes.STRING,
      defaultValue: '-'
    },
    user_id: {
     type: DataTypes.INTEGER,
     references: {
       model: 'User',
       key: 'id'
     }
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
