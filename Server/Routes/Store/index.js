var express = require('express')
var routes = express.Router()
const GAC = require('./getAppointmentCards')
const GAP = require('./getProducts')

routes.post('/getAppointmentCards', GAC)
routes.post('/getAllProducts', GAP)


module.exports = routes;