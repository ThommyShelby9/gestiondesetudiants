<script setup lang="ts">
import { RouterView } from 'vue-router'
import AsideBar from './AsideBar.vue';

</script>

<template>
    <div class="wrapper">
        <AsideBar />
        <main class="main">
            <RouterView />
        </main>
    </div>
</template>

<style scoped>
* {
    position: relative;
    margin: 0;
    padding: 0;
    color: white;
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

.wrapper {
    display: flex;
    width: 100%;
}

main {
    width: calc(100% - 200px);
    height: 100vh;
    background-color: rgb(17, 17, 22);
    overflow: scroll; 
    z-index: 1;  
}

main::-webkit-scrollbar {
    width: 5px;
}

main::-webkit-scrollbar-thumb {
    background-color: rgb(20, 19, 88);
    border-radius: 35px;
}
</style>
