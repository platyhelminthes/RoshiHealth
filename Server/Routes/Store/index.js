var express = require('express')
var routes = express.Router()
const GAC = require('./getAppointmentCards')
const GAP = require('./getProducts')
const GETS = require('./getSKU')
const GSI = require('./getSpecificItem')
const ATC = require('./addToCart')
const Charge = require('./charge')

routes.post('/getAppointmentCards', GAC)
routes.post('/getAllProducts', GAP)
routes.post('/getSkus', GETS)
routes.post('/getSpecificItem', GSI)
routes.post('/addToCart', ATC)
routes.post('/charge', Charge)


module.exports = routes;