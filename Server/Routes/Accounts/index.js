var express = require('express')
var routes = express.Router()
var CU = require('./CreateAccount')
const GUI = require('./getUserInfo')
const GU = require('./getUser')
const GP = require('./getProviders')

routes.post('/createUser', CU)
routes.get('/getUserInfo', GUI)
routes.get('/getUser', GU)
routes.get('/getProviders', GP)





module.exports = routes;