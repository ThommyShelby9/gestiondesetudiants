import { defineStore } from "pinia";
import {ref} from 'vue'
import {computed} from 'vue'
import {supabase} from '@/lib/supabase'
type user = {id?:number, nomEtablissement:string, email: string, registre_de_commerce: string, password: string}

export const useUserStore = defineStore('user', () => {
     const users= ref<user[]>([])
    const UserInitialise = ref('')
    async function initialise(){
        const result = await supabase.from('InscriptionUser').select("*")
        console.log(result.data)
        if(result.data)
        users.value = result.data
    }
    const dataConnection = ref()
    const UserConnectData = ref()
    async function userData(){
        const {data} = await supabase.auth.getSession()
        if(data.session){
            UserConnectData.value = data.session?.user.email
            console.log(UserConnectData)
            return UserConnectData
        }
         dataConnection.value = await supabase.from('InscriptionUser').select('email')
        if(dataConnection == UserConnectData){
            return UserConnectData
        }else{
            return UserConnectData.value = ''
        }
    }

     async function addUser(User: user) {
        const {data,error} = await supabase.from('InscriptionUser').insert(User).select("*")
        if(data){
            users.value.push(data[0])
        }
    }
     
    
    return {users, initialise, UserInitialise, addUser, userData, UserConnectData};
}) 

