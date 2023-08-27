import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import MemberView from './views/MemberView.vue'
import ActivityView from './views/ActivityView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/member',
      name: 'member',
      component: MemberView
    },
    {
      path: '/activity',
      name: 'activity',
      component: ActivityView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  }
})

export default router
