'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cart, User }) {
      this.belongsToMany(Cart, { through: 'Cart_order' })
      this.belongsTo(User, { foreignKey: 'user_id' })
    }
  }
  Order.init({
    delivery_date: {
     type: DataTypes.DATE,
    },
    delivery_street: {
      type: DataTypes.STRING,
      defaultValue: '-'
    },
    delivery_house: {
      type: DataTypes.STRING,
      defaultValue: '-'
    },
    delivery_apartment: {
     type: DataTypes.STRING,
     defaultValue: '-'
    },
    delivery_method: {
     type: DataTypes.STRING,
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
    modelName: 'Order',
  });
  return Order;
};
