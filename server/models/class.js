const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
    className: { type: String, require: true },
    courses: { nameCourse: { type: String }, startAt: { type: Date }, endAt: { type: Date }, studyTime: { type: String }, lecturer: { type: String, require: true } },
    capacity: { type: Number, require: true }
}, { timestamps: true })

module.exports = mongoose.model('Classes', classSchema)
