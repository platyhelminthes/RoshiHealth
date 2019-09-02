var express = require('express')
var routes = express.Router()
var login = require('./login')
const passport = require('../passport')
const check = require('./checkLogin')



routes.post('/login', passport.authenticate('local'), login, check)
routes.get('/check', check)





module.exports = routes;