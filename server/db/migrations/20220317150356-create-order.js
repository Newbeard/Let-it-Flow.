'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      delivery_date: {
        type: Sequelize.DATE
      },
      delivery_street: {
        type: Sequelize.STRING,
        defaultValue: '-'
      },
      delivery_house: {
        type: Sequelize.STRING,
        defaultValue: '-'
      },
      delivery_apartment: {
       type: Sequelize.STRING,
       defaultValue: '-'
      },
      delivery_method: {
        type: Sequelize.STRING
      },
      uuid: {
        type: Sequelize.STRING,
        defaultValue: '-'
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
