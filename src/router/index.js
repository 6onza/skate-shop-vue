import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/Home.vue'
import AppAbout from '../views/About.vue'
import AppContact from '../views/Contact.vue'
import AppProducts from '../views/Products.vue'

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
  },
  {
    path: '/products',
    name: 'AppProducts',
    component: AppProducts
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
    // este es un catch all, si no encuentra la ruta, redirige a la home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
