const express = require('express');
const router = express.Router();
const users = require('./accounts')
const login = require('./Login')


router.use('/users', users)
router.use('/login', login)


module.exports = router;