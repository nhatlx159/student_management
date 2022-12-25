const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    fullname: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
    birthday: { type: Date, require: true },
    CI: { type: String, length: 12 },
    image: { type: String, require: true },
    class: [],
    role: { type: String, require: true, default: "student" }
}, { timestamps: true })

module.exports = mongoose.model('Students', studentSchema)
