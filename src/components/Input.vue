<template>
    <div class="container_content">
        <div class="block">
        <form @submit.prevent="createUser">
            <h4>Inscription</h4>
            <input type="text" id="name" placeholder="Nom de l'\établissement" v-model="userInfo.nameEtab"><br>
            <input type="email" name="" id="email" placeholder="Email" v-model="userInfo.email"><br>
            <input type="number" id="registre" placeholder="Numéro de téléphone" v-model="userInfo.tel"><br>
            <input type="password" id="password" placeholder="Mot de passe" v-model="userInfo.password"><br>
            <a href="/connexion">Déjà un compte? Se connecter</a>
            <button>Envoyer</button>
        </form>
    </div>
    </div>
</template>

<script lang="ts" setup>
import clientHttp from '@/lib/clientHttp'
import { ref } from 'vue'
import router from '@/router';



const userInfo = ref({
    nameEtab : "",
    email : "",
    tel : "",
    password : ""
})

async function createUser(){
    try {
        const User = await clientHttp.post('/register', {
        nameEtab : userInfo.value.nameEtab,
        email : userInfo.value.email,
        tel : userInfo.value.tel,
        password : userInfo.value.password
    })
    console.log(User)
    router.replace('/verifyMail')
    } catch (error) {
        
    }
    
}



</script>

 <style>
* {
    color: black;
    position: relative;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
}

.block {
    padding: 0 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

form {
    color: black !important;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
    box-shadow: 0 0 5px #68c3ff;
    border-radius: 20px;
}

form h4{
    color: rgb(0, 195, 255);
    font-size: 20px;
}

form a{
    border: none;
    color: rgb(0, 195, 255);
    text-decoration: underline;
}

a {
    border: 1px solid black;
    border-radius: 25rem;

}

#submit{
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer; 
    box-shadow: 0 0 5px #68c3ff;
    background-color: rgb(63, 61, 61); 
    color: white;
}

#submit:hover{
    background-color: #68c3ff;
    color: black;
    box-shadow: 0 0 5px rgb(63, 61, 61);
}

input {
    width: 100%;
    color: black !important;
    height: 40px;
    border-radius: 10px;
}
</style> 