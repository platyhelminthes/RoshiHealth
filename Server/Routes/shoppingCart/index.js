var express = require('express')
var routes = express.Router()
const AP = require('./addProduct');
const GSI = require('./getSubsInfo')
const GISD = require('./generateInitialSubscriptionDocument')
const GC = require('./getCart')
const GII = require('./getItemsInfo')
const RI = require('./removeItem')
const FT = require('./finishTransaction')
const AI = require('./addItem')
const CH = require('./charge')



routes.post('/addProductToCart', AP)
routes.get('/getSubsInfo', GSI)
routes.get('/generateSub', GISD)
routes.get('/getUserCart', GC)
routes.post('/getItemsInfo', GII)
routes.post('/remove', RI)
routes.post('/finish', FT)
routes.post('/addItem', AI)
routes.post('/charge', CH.charge)



module.exports = routes;