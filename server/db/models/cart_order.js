'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Cart }) {
      // this.hasMany(Order, { foreignKey: 'order_id'})
      // this.hasMany(Cart, { foreignKey: 'cart_id' })
    }
  }
  Cart_order.init({
    order_id: {
     type: DataTypes.INTEGER,
     references: {
       model: 'Order',
       key: 'id'
     }
    },
    cart_id: {
     type: DataTypes.INTEGER,
     references: {
       model: 'Cart',
       key: 'id'
     }
    },
  }, {
    sequelize,
    modelName: 'Cart_order',
  });
  return Cart_order;
};
