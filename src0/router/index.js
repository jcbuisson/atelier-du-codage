
import { createRouter, createWebHistory } from 'vue-router'

import Home from '/src/views/Home.vue'
import Realisations from '/src/views/Realisations.vue'
import Expertise from '/src/views/Expertise.vue'
import Tarifs from '/src/views/Tarifs.vue'
import Contact from '/src/views/Contact.vue'


const routes = [
   {
      path: '/',
      component: Home,
   },
   {
      path: '/realisations',
      component: Realisations,
   },
   {
      path: '/expertise',
      component: Expertise,
   },
   {
      path: '/tarifs',
      component: Tarifs,
   },
   {
      path: '/contact',
      component: Contact,
   },
   {
      path: "/:catchAll(.*)",
      redirect: '/',
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router
