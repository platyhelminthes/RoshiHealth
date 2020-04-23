var express = require('express')
var routes = express.Router()
const GAC = require('./getAppointmentCards')
const GAP = require('./getProducts')
const GETS = require('./getSKU')
const GSI = require('./getSpecificItem')
const ATC = require('./addToCart')
const Charge = require('./charge')
const GETC = require('./getContentful')

routes.post('/getAppointmentCards', GAC)
routes.post('/getAllProducts', GAP)
routes.post('/getSkus', GETS)
routes.post('/getSpecificItem', GSI)
routes.post('/addToCart', ATC)
routes.post('/charge', Charge)
routes.post('/getContentful', GETC)


module.exports = routes;