const classController = require('../controllers/class')

const route = require('express').Router()

route.post('/addclass', classController.addClass)

module.exports = route
