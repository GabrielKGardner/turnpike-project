import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const router = createRouter({
  linkExactActiveClass: 'font-bold relative after:content-[""] after:absolute after:top-[24px] after:left-0 after:w-[21px] after:h-[2px] after:bg-yellow-400',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
