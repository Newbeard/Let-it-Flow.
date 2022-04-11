const express = require('express');
const router = express.Router();
const { Cart, Bouquet } = require('../db/models')

router.get('/:id', async (req, res) => {
  try {
    // const carts = await Cart.findAll({ where: { 
    //   user_id: 2, 
    //   isActive: true,
    //   through: [{ 
    //     model: Bouquet,
    //     where: { id: 1 },
    //     // attributes: [bouquet_id]
    //    }]
    // }})
    // console.log(req.body);
    const { id } = req.params
    const carts = await Cart.findAll({ where: { 
      user_id: id, 
      isActive: true,
    }})
    res.json(carts)
  } catch (error) {
    res.status(401)
    .json({ message: error.message})
    .end()  
  }
})

router.post('/bouquet', async (req, res) => {
  try {
    console.log('666', req.body);
    const { id } = req.body
    const bouquet = await Bouquet.findOne({ where : { id }})
    res.json({ bouquet })
  } catch (error) {
    res.status(401)
    .json({ message: error.message})
    .end() 
  }
})

router.post('/', async (req, res) => {
  try {
    const { item, id, uuid } = req.body
    // console.log('cart', req.body);
    const recordCartItem = await Cart.create({ bouquet_id: item.bouquet.id, count: item.count, uuid, user_id: id,  })
    return res.json({recordCartItem})
  } catch (error) {
    res.status(401)
    .json({ message: error.message})
    .end()  
  }
})


module.exports = router;
