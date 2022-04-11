const express = require('express');
const router = express.Router();
const { Cart, Event } = require('../db/models')
const { axios } = require('axios')

router.get('/', async (req, res) => {
  try {
   const sms = axios('https://email:api_key@gate.smsaero.ru/v2/sms/send?number=79000000000&text=youtext&sign=SMS Aero')
    const date = await Event.findAll()
    res.json(date)
  } catch (error) {
    res.status(401)
    .json({ message: error.message})
    .end()  
  }
})
router.get('/1', async (req, res) => {
  try {
   const sms = axios('https://email:api_key@gate.smsaero.ru/v2/sms/send?number=79000000000&text=youtext&sign=SMS Aero')
    const date = await Event.findAll()
    res.json(new Date(date[0].date).getTime())
    res.json(date)
  } catch (error) {
    res.status(401)
    .json({ message: error.message})
    .end()  
  }
})


module.exports = router;
