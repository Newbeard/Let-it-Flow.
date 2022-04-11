const { Category } = require('../db/models');

const getCategories = async (req, res) => {
  const categories = await Category.findAll();
  // console.log(categories);
  res.json(categories);
}
module.exports = { getCategories };