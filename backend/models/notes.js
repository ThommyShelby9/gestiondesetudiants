const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    id_student : {
        type: mongoose.Types.ObjectId,
        ref: 'student',
        require: true
    },
    id_matiere : {
        type: mongoose.Types.ObjectId,
        ref: 'matiere',
        require: true
    },
    note1 : {
        type: Number,
    },
    note2 : {
        type: Number,
    },
    note3 : {
        type: Number,
    },
    moy : {
        type: Number
    },
    userId : {
        type: Number,
        ref: 'user',
        require: true
    }
})

const note = mongoose.model('note', NoteSchema)

module.exports = note