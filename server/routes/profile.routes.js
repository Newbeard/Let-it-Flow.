const express = require('express');
const router = express.Router();
const { eventPost, eventInit } = require('../controllers/profile.controller');
const { addBouquet } = require('../controllers/profile.controller');

const auth = require('../middlewares/auth.middleware');

router.post('/profile/event', eventPost);
router.get('/profile/:id', eventInit);


module.exports = router;