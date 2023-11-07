<script lang="ts" setup>
import { RouterLink} from 'vue-router'
import AsideBarLogo from '../DashboardLayout/AsideBarLogo.vue';
import { ref, defineEmits } from 'vue';
import  clientHttp  from '@/lib/clientHttp.js'
import router from '@/router';

const emits = defineEmits(['userInfoFetched']);
const userConnect = ref(null);

const token = localStorage.getItem('token')
async function connectedUser() {
    const response = await clientHttp.get('/auth', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(userConnect)
    userConnect.value = response.data.name
}
connectedUser()

function logout(){
    router.replace('/')
}


</script>


<template>
    <aside class="asidebar">
        <div class="container_aside">
            <div class="asidebar_content">
                <div class="asidebar_top">
                    <p>{{ userConnect }}</p>
                </div>
                <ul>
                    <router-link to="/dashboard">
                        <li>
                            <AsideBarLogo />
                            Dashboard
                        </li>
                    </router-link>
                    <router-link to="/dashboard/etudiant">
                        <li>
                            <AsideBarLogo />
                            Etudiants
                        </li>
                    </router-link>
                    <router-link to="/dashboard/matiere">
                        <li>
                            <AsideBarLogo />
                            Matiere
                        </li>
                    </router-link>
                </ul>
                <button type="button" class="logout" @click="logout">Logout</button>
                <div class="asidebar_bottom">
                    &copy;All Rigths Reserved
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped>
* {
    position: relative;
    margin: 0;
    padding: 0;
    color: white !important;
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
    text-decoration: none;
    color: black;
}

ul li {
    list-style-type: none;
}

body {
    width: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}


.container_aside {
    padding: 20px 15px;
    margin: 0 auto;
    max-width: 1140px;
}


.asidebar {
    background-color: rgb(2, 2, 2);
    width: 200px;
    height: 100vh;
}

.asidebar_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    padding: 20px;
}

.asidebar_top {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding-right: 40px;
    gap: 10px;
}


.asidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
}

.asidebar ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
}

.asidebar ul li {
    font-size: 14px;
    color: white;
    padding: 10px;
    display: flex;
    text-align: center;
    align-items: center;
    width: 100px;
    border-radius: 20px;
}

.asidebar ul li:hover {
    background-color: rgb(0, 195, 255);
    color: black;
}

.logout{
    border-radius: 25px;
    background-color: red;
    color: white;
    cursor: pointer;
}

.logout:hover{
    background-color: white;
    color: red !important;
}
</style>