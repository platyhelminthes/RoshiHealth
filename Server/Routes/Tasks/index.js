var express = require('express')
var routes = express.Router()
const addTask = require('./addTask')
const FT = require('./finishTask')
const GT = require('./getTasks')



routes.post('/addTask', addTask)
routes.post('/finishTask', FT)
routes.get('/getTasks', GT)





module.exports = routes;