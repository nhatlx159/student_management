const mongoose = require('mongoose');

const lecturerSchema = mongoose.Schema({
    fullname: { type: String, require: true },
    birthday: { type: Date, require: true },
    CI: { type: String, length: 12 },
    image: { type: String, require: true },
    majors: { type: String, require: true },
    class: [],
    role: { type: String, require: true, default: "lecturer" }
}, { timestamps: true })

module.exports = mongoose.model('Lecturers', lecturerSchema)
