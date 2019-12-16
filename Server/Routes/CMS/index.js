var express = require('express')
var routes = express.Router()
const CTEST = require('./test')

routes.get('/test', CTEST)






module.exports = routes;