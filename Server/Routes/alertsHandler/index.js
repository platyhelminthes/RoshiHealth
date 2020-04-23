var express = require('express')
var routes = express.Router()
const SeeAlert = './SeeAlert'

routes.get('/SeeAlert', SeeAlert)






module.exports = routes;