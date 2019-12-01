var express = require('express')
var routes = express.Router()
const addTask = require('./addTask')
const FT = require('./finishTask')
const GT = require('./getTasks')
const FST = require('./finishSubTasks')



routes.post('/addTask', addTask)
routes.post('/finishTask', FT)
routes.get('/getTasks', GT)
routes.post('/FinishSubTask', FST)





module.exports = routes;