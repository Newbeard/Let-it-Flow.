const express = require('express');
const router = express.Router();
const { getCategories } = require('./../controllers/category.controller')
const { Bouquet } = require('../db/models')


router.route('/')
  .get(getCategories);

  router.get('/:id', async(req, res) =>{
    const { id } = req.params;
    const bouquetCategory = await Bouquet.findAll({
  where: { category_id: id }
    });
    res.json(bouquetCategory)
  })

module.exports = router;
