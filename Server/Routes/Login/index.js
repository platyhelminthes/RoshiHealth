var express = require('express')
var routes = express.Router()
var login = require('./login')
const passport = require('../passport')
const check = require('./checkLogin')
const LO = require('./logOut')



routes.post('/login', passport.authenticate('local'), login)
routes.get('/check', check)
routes.get('/logOut', LO)





module.exports = routes;