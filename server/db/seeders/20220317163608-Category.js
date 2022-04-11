'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Монобукеты', icon: '/img/icons/leaf.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Композиции', icon: '/img/icons/carnation.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Букет невесты', icon: '/img/icons/daffodil.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Набор для вазы', icon: '/img/icons/vase.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Авторские букеты', icon: '/img/icons/plumeria.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Горшечные растения', icon: '/img/icons/daisy.png', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Categories')
   }
  };
