const express = require('express');
const router = express.Router();
const { Bouquet } = require('../db/models');

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const cardOne = await Bouquet.findByPk(id);
  res.json(cardOne)
})


module.exports = router;