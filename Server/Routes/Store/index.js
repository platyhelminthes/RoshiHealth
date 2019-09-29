var express = require('express')
var routes = express.Router()
const GAC = require('./getAppointmentCards')


routes.post('/getAppointmentCards', GAC)



module.exports = routes;