const express = require('express')
const cors = require('cors')
const db = require('./connection')
require('dotenv').config()
const PORT = process.env.PORT || 3001
db()

// REQUIRE ROUTE
const studentRoute = require('./routes/student')
const classRoute = require('./routes/class')
const lecturerRoute = require('./routes/lecturer')
const app = express()
app
    .use(cors())
    .use(express.json())
    .use('/student', studentRoute)
    .use('/class', classRoute)
    .use('/lecturer', lecturerRoute)
    .listen(PORT, ()=> console.log('Server running on: http://localhost:' + PORT))
