<template>
    <div class="container">
        <div class="content">
            <div class="content_left">
                <form>
                    <h2 class="title">Ajout de notes</h2>
                    <select name="" id="" v-model="idMatiere">
                        <option v-for="element in matiere" :value="element._id">{{ element.nameMatiere }}</option>
                    </select>
                    <select name="" id="" v-model="idStudent">
                        <option v-for="element in students" :value="element._id">{{ element.firstname }} {{
                            element.lastname }}</option>
                    </select>
                    <input type="number" name="" id="" placeholder="Note de l'étudiant" v-model="note">
                    <button type="submit" @click="addNote">Enregistrer</button>
                </form>
            </div>
            <div class="content_right">
                <table class="table">
                    <h2 class="title">Tableau récapitulatif des notes</h2>
                    <tr >
                        <th class="title">Nom et prénoms </th>
                        <th class="title">Matière</th>
                        <th class="title">Note1</th>
                        <th class="title">Note2</th>
                        <th class="title">Note3</th>
                        <th class="title">Moyenne</th>
                    </tr>
                    <tbody >
                        <tr v-for="element in notes">
                            <td>{{ element.student.firstname }}  {{ element.student.lastname }}</td>
                            <td>{{ element.matiere.nameMatiere }}</td>
                            <td >{{ element.notes.note1 }}</td>
                            <td >{{ element.notes.note2 }}</td>
                            <td >{{ element.notes.note3 }}</td>
                            <td >{{ element.notes.moyenne }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import  clientHttp  from '@/lib/clientHttp'
import { ref } from 'vue'
var idMatiere = ref()
const matiere = ref()
var idStudent = ref()
var note = ref()
const response = ref()
async function getMatiere() {
    const response = await clientHttp.get('/getMatiere')
    console.log(response)
    matiere.value = response.data
}

const students = ref()
const token = localStorage.getItem('token')
async function getStudent() {
    const userData = await clientHttp.get('/auth', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    response.value = await clientHttp.get(`/student/getStudent/${userData.data.id}`)
    console.log(response.value.data)
    students.value = response.value.data

}

getStudent()

getMatiere()


async function addNote() {
    const matiereId = idMatiere.value;
    const studentId = idStudent.value;
    console.log(matiereId)
    console.log(studentId)
    const userData = await clientHttp.get('/auth', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const idUser = userData.data.id
    try {
        const noteData = await clientHttp.post('/note/addNote', {
            id_student: studentId,
            id_matiere: matiereId,
            note: note.value,
            userId: idUser
        })
        console.log(noteData)
    } catch (error) {

    }

}

const student = ref()
const matieres = ref()
const notes = ref()
async function getNote(){
    const userData = await clientHttp.get('/auth', {
        headers: {
            Authorization: `Bearer ${token}` 
        }
    })
    const response = await clientHttp.get(`/note/notes/${userData.data.id}`)
    console.log(response.data)
    notes.value = response.data
    
}
getNote()

getStudent()

</script>

<style scoped>
.content{
    display: flex;
    gap: 20;
    justify-content: space-around;
    padding-top: 40px;
}

.title{
    color: white;
}


table.table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    color: white !important;
}

table.table tr th,
td {
    color: white !important;
    border: solid 1px rgb(0, 195, 255);
    padding: 10px;
    align-items: center;
}


table tr:nth-child(even) td,
thead th {
    background-color: var(--color-dark);
    color: white;
}
</style>