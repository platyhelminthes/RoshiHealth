const express = require('express');
const router = express.Router();
const users = require('./accounts')
const login = require('./Login')
const tasks = require('./Tasks')


router.use('/users', users)
router.use('/login', login)
router.use('/tasks', tasks)

module.exports = router;