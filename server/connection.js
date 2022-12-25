const mongoose = require('mongoose')

const DBconnect = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.URI, (err) => {
        if (err) throw err
        console.log("connect database successfully!!!");
    })
}

module.exports = DBconnect
