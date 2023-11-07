const MatiereModel = require('../models/matieres')

async function getMatiere (req, res, next){
    try {
        const matieres = await MatiereModel.find()
        console.log(matieres)
        res.status(200).send(matieres)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {getMatiere}