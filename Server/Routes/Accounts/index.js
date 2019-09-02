var express = require('express')
var routes = express.Router()
var CU = require('./CreateAccount')
const GUI = require('./getUserInfo')

routes.post('/createUser', CU)
routes.get('/getUserInfo', GUI)





module.exports = routes;