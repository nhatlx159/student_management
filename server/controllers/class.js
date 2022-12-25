const Class = require('../models/class')

const classController = {
    addClass: async (req, res) => {
        const data = {
            className: req.body.className,
            courses: req.body.courses,
            capacity: req.body.capacity
        }
        const _class = await new Class(data)
        await _class.save()
        res.status(200).json(_class)
    }
}

module.exports = classController
