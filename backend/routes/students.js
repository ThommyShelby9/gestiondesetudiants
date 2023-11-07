var express = require('express');
var router = express.Router();
const StudentModel = require('../models/students')
var StudentController = require('../controllers/StudentController')

router.post('/', StudentController.addStudent)

router.get('/getStudent/:userId', async function getStudent(req, res, next){
    try {
        const userId = req.params.userId;
        const students = await StudentModel.find({ userId: userId });
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des étudiants.' });
    }
})

router.post('/searchStudent', StudentController.searchStudent)

module.exports = router