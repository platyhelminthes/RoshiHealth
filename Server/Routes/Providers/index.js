var express = require('express')
var routes = express.Router()
const MA = require('./makeAccount');
const FP = require('./findProvidersByType')
const AP = require('./addProvider')
const APP = require('./addPatient')
const GP = require('./getPatients')
const GA = require('./getAppointment')
const MAP = require('./makeAppointment')
const SD = require('./sendDoctors')
const SA = require('./setAvailability')




routes.post('/setProvider', MA)
routes.post('/searchProviders', FP)
routes.post('/addProvider', AP)
routes.post('/addPatient', APP)
routes.post('/getPatients', GP)
routes.post('/getAppointments', GA)
routes.post('/makeAppointment', MAP)
routes.post('/sendDoctor', SD)
routes.post('/addAvailability', SA)




module.exports = routes;