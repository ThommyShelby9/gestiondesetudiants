<template>
    <div class="block">
        <form @submit.prevent="validateMail">
            <h4>Inscription</h4>
            <input type="text" placeholder="Entrez le code de vérification ici!" v-model="mailCode">
            <button>Envoyer</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import clientHttp from '@/lib/clientHttp'
import router from '@/router';
import {ref} from 'vue'
const mailCode = ref()
async function validateMail (){
    try {
        const validate = await clientHttp.post('/verificateCode', {
            verificationCode: mailCode.value
        })
        router.replace('/connexion')
    } catch (error) {
        console.log(error)
    }
}
</script>