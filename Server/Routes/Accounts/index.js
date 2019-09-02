var express = require('express')
var routes = express.Router()
var CU = require('./CreateAccount')

routes.post('/createUser', CU)






module.exports = routes;