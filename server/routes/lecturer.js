const lecturerController = require('../controllers/lecturer.js')

const route = require('express').Router()

//GET
route.get('/getalllecturer', lecturerController.getAllLecturer)
route.get('/getlecturer/:id', lecturerController.getLecturerById)
//POST
route.post('/addlecturer', lecturerController.addLecturer)

//PATCH
route.patch('/editlecturer/:id', lecturerController.editLecturer)

module.exports = route