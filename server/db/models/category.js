'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Bouquet }) {
      this.hasMany(Bouquet, { foreignKey: 'category_id' })
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING
    },
    icon: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
