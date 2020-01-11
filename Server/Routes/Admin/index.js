var express = require('express')
var routes = express.Router()
const GAA = require('./getallaccounts.js')



routes.get('/getAllAccounts', GAA)





module.exports = routes;