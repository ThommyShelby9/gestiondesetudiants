<template>
   <Input />
</template>

<script lang="ts" setup>
import Input from '@/components/Input.vue'
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
const {initialise, addUser} = useUserStore()
const {users} = storeToRefs(useUserStore())
const router = useRouter()
type user = {id?:number, nomEtablissement?:string, email?: string, registre_de_commerce: string, nom_du_propiétaire: string, password: string}


</script>

<style scoped>

</style>