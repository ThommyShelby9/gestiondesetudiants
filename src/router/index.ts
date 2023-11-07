import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '@/views/Acceuil.vue'
import Dashboard from '@/DashboardLayout/Dashboard.vue';
import InscriptionUser from '@/components/InscriptionForm.vue'
import Connexion from '@/views/Connexion.vue'
import AppVue from '@/App.vue'
import Etudiants from '@/DashboardLayout/Etudiants.vue';
import DashboardAccueil from '@/DashboardLayout/DashboardAcceuil.vue'
import Matiere from '@/DashboardLayout/Matière.vue'
import AddEtudiant from '@/DashboardLayout/AddEtudiant.vue';
import ErrorVue from '@/views/Error.vue';
import VerifyMail from '@/components/VerifyMail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Acceuil
    },
    {
      path: '/dashboard',
      component: Dashboard,
     /*  beforeEnter:[
        function redirect(to, from){
          return '/inscription_user'
        }
      ] */
      children:[
        {
          path:'',
          component: DashboardAccueil
        },
        {
          path: 'etudiant',
          component: Etudiants
        },
        {
          path: 'matiere',
          component : Matiere
        },
        {
          path: 'addstudent',
          component: AddEtudiant
        }
      ]
    },
    {
      path: '/inscription_user',
      component: InscriptionUser
    },
    {
      path: '/connexion',
      component: Connexion
    },
    {
      path: '/verifyMail',
      component : VerifyMail
    },
    {
      path: '/:catchAll(.*)*',
      name : 'PageNotFound',
      component : ErrorVue
    }
    
  ]
})

export default router
