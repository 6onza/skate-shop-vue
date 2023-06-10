import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/Home.vue'
import AppAbout from '../views/About.vue'
import AppContact from '../views/Contact.vue'

const routes = [

  {
    path: '/',
    name: 'AppHome',
    component: AppHome
  },
  {
    path: '/about',
    name: 'AppAbout',
    component: AppAbout
  },
  {
    path: '/contact',
    name: 'AppContact',
    component: AppContact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
