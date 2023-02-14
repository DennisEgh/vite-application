import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/pages/:id",
      name: 'Page 1',
      component: LandingPageView
    },
    {
      path: "/pages/:id",
      name: 'Page 2',
    }
  ]
})

export default router
