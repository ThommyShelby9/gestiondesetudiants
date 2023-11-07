const NoteModel = require('../models/notes')
async function addNote(req, res, next) {
    const id_student = req.body.id_student;
    const id_matiere = req.body.id_matiere;
    const noteValue = req.body.note;
    const userId = req.body.userId;

    try {
        const existingNote = await NoteModel.findOne({ id_student, id_matiere });
        if (!existingNote) {
            const newNote = new NoteModel({
                id_student,
                id_matiere,
                note1: noteValue,
                moy: noteValue,
                userId
            });
            await newNote.save();
            res.status(201).send(newNote);
        } else {
            if (existingNote.note1 === null || existingNote.note1 === undefined) {
                existingNote.note1 = noteValue;
                existingNote.moy = (existingNote.note1 + noteValue) / 2;
            } else if (existingNote.note2 === null || existingNote.note2 === undefined) {
                existingNote.note2 = noteValue;
                existingNote.moy = (existingNote.note1 + existingNote.note2) / 2;
            } else if (existingNote.note3 === null || existingNote.note3 === undefined) {
                existingNote.note3 = noteValue;
                existingNote.moy = (existingNote.note1 + existingNote.note2 + existingNote.note3) / 3;
            } else {
                return res.status(400).send("L'étudiant a déjà trois notes dans cette matière.");
            }
            await existingNote.save();
            res.status(200).send(existingNote);
        }
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
}





module.exports = {addNote}