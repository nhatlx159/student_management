const Lecturer = require('../models/lecturer')
const lecturerController = {
    getAllLecturer: async (req, res)=> {
        try {
            const lecturer = await Lecturer.find()
            res.status(200).json(lecturer)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getLecturerById: async (req, res) => {
        try {
            const lecturer = await Lecturer.findById(req.params.id)
            res.status(200).json(lecturer)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    addLecturer: async (req, res) => {
        try {
            const data = {
                fullname: req.body.fullname,
                birthday: req.body.birthday,
                CI: req.body.CI,
                image: req.body.image,
                majors: req.body.majors
            }
            const user = new Lecturer(data)
            const resData = await user.save()
            res.status(200).json('Add lecturer successfully!!! ' + resData)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    editLecturer: async (req, res) => {
        try {
            const current_data = await Lecturer.findById(req.params.id)
            const data = {
                fullname: req.body.fullname || current_data.fullname,
                birthday: req.body.birthday || current_data.birthday,
                CI: req.body.CI || current_data.CI,
                image: req.body.image || current_data.image,
                majors: req.body.majors || current_data.majors,
                class: req.body.class || current_data.class,
            }
            const lecturer = await Lecturer.findByIdAndUpdate(req.params.id, data)
            await lecturer.save()
            res.status(200).json("Update lecturer successfully!!!!")
        } catch (error) {
            res.status(500).json(error)
        }
    },

}

module.exports = lecturerController
