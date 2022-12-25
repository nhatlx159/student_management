const Student = require('../models/student')
const Class = require('../models/class')
const studentController = {
    getAllStudent: async (req, res)=> {
        try {
            const student = await Student.find()
            res.status(200).json(student)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getStudentById: async (req, res) => {
        try {
            const student = await Student.findById(req.params.id)
            res.status(200).json(student)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addstudent: async (req, res) => {
        try {
            const data = {
                fullname: req.body.fullname,
                birthday: req.body.birthday,
                CI: req.body.CI,
                image: req.body.image,
                email: req.body.email,
                phone: req.body.phone
            }
            const user = new Student(data)
            const resData = await user.save()
            res.status(200).json('Add student successfully!!! ' + resData)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    registerCourse: async (req, res) => {
        try {
            const student = await Student.findById(req.body.student_id)
            const _class = await Class.findById(req.body.class_id)
            student.class.push(_class)
            await student.save()
            res.status(200).json(student.class)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    editStudent: async (req, res) => {
        try {
            const current_data = await Student.findById(req.params.id)
            const data = {
                fullname: req.body.fullname || current_data.fullname,
                birthday: req.body.birthday || current_data.birthday,
                CI: req.body.CI || current_data.CI,
                image: req.body.image || current_data.image,
                email: req.body.email || current_data.email,
                phone: req.body.phone || current_data.phone
            }
            const student = await Student.findByIdAndUpdate(req.params.id, data)
            await student.save()
            console.log("Update student successfully!!!!");
            res.status(200).json("Update student successfully!!!!")
        } catch (error) {
            res.status(500).json(error)
        }
    },
}

module.exports = studentController
