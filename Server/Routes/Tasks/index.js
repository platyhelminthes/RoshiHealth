var express = require('express')
var routes = express.Router()
const addTask = require('./addTask')



routes.post('/addTask', addTask)





module.exports = routes;