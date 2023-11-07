const StudentModel = require('../models/students')
const uuid = require('uuid')



async function addStudent(req, res, next){
    const newStudent = new StudentModel ( {
        student_id: uuid.v4(),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        old: req.body.old,
        gender: req.body.gender,
        userId : req.body.userId
    })

    try {
        const student = await newStudent.save()
        console.log(student)
        return res.status(201).send(student)
    } catch (error) {
        console.log(error)
        return res.status(400).send({message: error.message })
    }
}

async function searchStudent(){
    const { searchQuery } = req.query;

    try {
        const students = await StudentModel.find({
            $or: [
                { firstname: { $regex: searchQuery, $options: 'i' } }, 
                { lastname: { $regex: searchQuery, $options: 'i' } } 
            ]
        });

        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la recherche des étudiants.' });
    }
}

module.exports = {addStudent, searchStudent}