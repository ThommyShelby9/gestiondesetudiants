import { defineStore } from "pinia";
import {ref} from 'vue'
import {computed} from 'vue'
import {supabase} from '@/lib/supabase'
type etudiant = {id?:number, Nom:string, Prenom: string, Age: string, Genre: string, email_user: string}

export const useEtudiantStore = defineStore('etudiant', () => {
    const etudiants= ref<etudiant[]>([])
    const UserInitialise = ref('')
    const dataConnection = ref()
    const UserConnectData = ref()
    async function initialise(){
        const result = await supabase.from('Etudiants').select("*")
        console.log(result.data)
        if(result.data)
        etudiants.value = result.data
    } 

   /*   async function userData(){
        const {data} = await supabase.auth.getSession()
        if(data.session){
            const UserInitialise = data.session?.user.email
            return {UserInitialise};
        }
    } */

    const dataConnect = ref()
    async function userData(){
        const {data} = await supabase.auth.getSession()
        if(data.session){
            const UserInitialise = data.session?.user.email
            console.log(UserInitialise)
            dataConnection.value = await supabase.from('Etudiants').select('idUser')
            dataConnect.value = await supabase.from('InscriptionUser').select('id')
            console.log(dataConnection)
            console.log(dataConnect)
      /*   if(dataConnection === UserConnectData){
         return etudiants.value
        }else{
            return etudiants.value = []
        } */
        }
    }

    async function addstudent(Etudiant: etudiant) {
        const {data,error} = await supabase.from('Etudiants').insert(Etudiant)
        if(data){
            etudiants.value.push(data[0])
        }

    } 
    
   /*   const userName = computed(() =>{
        const data = supabase.auth.getSession()
        if(data.session){
            const User = data.session.user
            return {User}
        }
    })  */


    
    return {etudiants, initialise, UserInitialise, userData, addstudent, dataConnection, dataConnect};
})