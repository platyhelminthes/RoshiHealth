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
const AAD = require('./dailySchedule')
const SST = require('./sendSubTask')
const RESD = require('./resetDay')
const FINDD = require('./findDoctor')



routes.post('/dailySchedule', AAD)
routes.post('/setProvider', MA)
routes.post('/searchProviders', FP)
routes.post('/addProvider', AP)
routes.post('/addPatient', APP)
routes.post('/getPatients', GP)
routes.post('/getAppointments', GA)
routes.post('/makeAppointment', MAP)
routes.post('/sendDoctor', SD)
routes.post('/addAvailability', SA)
routes.post('/sendSubTask', SST)
routes.post('/resetDay', RESD)
routes.post('/findDoctor', FINDD)




module.exports = routes;