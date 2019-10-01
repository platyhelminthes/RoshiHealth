const express = require('express');
const router = express.Router();
const users = require('./Accounts')
const login = require('./Login')
const tasks = require('./Tasks')
const cart = require('./shoppingCart')
const providers = require('./Providers')
const store = require('./Store')


router.use('/users', users)
router.use('/login', login)
router.use('/tasks', tasks)
router.use('/cart', cart)
router.use('/providers', providers)
router.use('/store', store)

module.exports = router;