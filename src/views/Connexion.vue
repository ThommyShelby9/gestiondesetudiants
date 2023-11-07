<script lang="ts" setup>
import  clientHttp  from '@/lib/clientHttp'
import { ref } from 'vue'
import router from '@/router';

const userData = ref({
    email: "",
    password: ""
})

async function connectedUser() {
    try {
        const UserConnectData = await clientHttp.post('/login', {
            email: userData.value.email,
            password: userData.value.password,
            /* clientHttp.defaults.headers.common['Authorization'] = `Bearer ${token}`; */
        })
        const token = UserConnectData.data.token
        localStorage.setItem('token', token)
        if (token) {
            clientHttp.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
        console.log(UserConnectData)
        router.replace('/dashboard')
    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <body>
        <div class="container_content">
            <div class="block">
            <form action="">
                <h4>Connexion</h4>
                <input type="email" name="" id="email" placeholder="Email" v-model="userData.email"><br>
                <input type="password" id="password" placeholder="Mot de passe" v-model="userData.password"><br>
                <a href="/inscription_user">Pas encore inscrit? Cliquez ici</a>
            </form>
            <button type="submit" id="submit" @click="connectedUser">Connecter</button>
        </div>
        </div>
    </body>
</template>    


<style >
* {
    color: black;
    position: relative;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
}

body {
    background-color: rgb(27, 27, 43);
}

.container_content{
    padding-top: 70px;
}

.block {
    padding: 0 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.template {
    background-color: rgb(20, 20, 44);
}

form {
    color: black !important;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px #68c3ff;
    border-radius: 20px;
    gap: 10px;
    padding: 20px;
}

form h4 {
    color: rgb(0, 195, 255);
    font-size: 20px;
}

form a {
    border: none;
    color: rgb(0, 195, 255);
    text-decoration: underline;
}

a {
    border: 1px solid black;
    border-radius: 25rem;

}

#submit {
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 0 5px #68c3ff;
    background-color: rgb(63, 61, 61);
    color: white;
}

#submit:hover {
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