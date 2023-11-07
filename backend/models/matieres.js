const mongoose = require('mongoose')

const MatiereSchema = mongoose.Schema({
    nameMatiere : {
        type: String,
        require: true
    },
    nameTeacher : {
        type: String,
        require: true
    }
})

const matiere = mongoose.model('matiere', MatiereSchema)

module.exports = matiere