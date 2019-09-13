var express = require('express')
var routes = express.Router()
const MA = require('./makeAccount');
const FP = require('./findProvidersByType')
const AP = require('./addProvider')
const APP = require('./addPatient')
const GP = require('./getPatients')




routes.post('/setProvider', MA)
routes.post('/searchProviders', FP)
routes.post('/addProvider', AP)
routes.post('/addPatient', APP)
routes.post('/getPatients', GP)




module.exports = routes;