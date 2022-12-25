const studentController = require('../controllers/student.js')

const route = require('express').Router()

//GET
route.get('/getallstudent', studentController.getAllStudent)
route.get('/getstudent/:id', studentController.getStudentById)
//POST
route.post('/addstudent', studentController.addstudent)
route.post('/registercourse', studentController.registerCourse)

//PATCH
route.patch('/editstudent/:id', studentController.editStudent)

module.exports = route