const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    student_id: {
        type: String,
    },
    firstname: {
        type: String,
        require: true,
    },
    lastname: {
        type:String,
        require: true,
    },
    email:{
        type: String,
        require:true,
        unique: true
    },
    old:{
        type: Number,
        require: true,
    },
    gender:{
        type: String,
        require: true
    },
    userId: {
        type: Number,
        ref: 'user', 
        require: true
    }
})

const student = mongoose.model('student', StudentSchema)

module.exports = student