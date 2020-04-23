var express = require('express')
var routes = express.Router()
const TEST = require('./cmsTest')

routes.get('/cmsTest', TEST)



module.exports = routes;