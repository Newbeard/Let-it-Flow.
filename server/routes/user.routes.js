const express = require('express');
const router = express.Router();
const { userAccess, userRegister, userLogin, userLogout, userRefresh } = require('../controllers/user.controller');

router.post('/login', userLogin);
router.post('/signup', userRegister);
router.get('/logout', userLogout);
router.get('/refresh', userRefresh); 
router.get('/refresh', userRefresh); 
router.get('/access', userAccess); 

module.exports = router;
