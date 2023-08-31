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

const imagesToPreloadForRoutes = {
  '/activity': [
    'src/assets/img/Activity/website.webp',
    'src/assets/img/Activity/sp_website.webp',
    'src/assets/img/Activity/LT.webp',
    'src/assets/img/Activity/sp_LT.webp',
    'src/assets/img/Activity/Events.webp',
    'src/assets/img/Activity/sp_Events.webp'
  ]
  // ...他のルートと画像リスト
}

function preloadImages(imageList) {
  return Promise.all(
    imageList.map((src) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = src
        img.onload = resolve
      })
    })
  )
}

router.beforeEach(async (to, from, next) => {
  const imagesForThisRoute = imagesToPreloadForRoutes[to.path]

  if (imagesForThisRoute && imagesForThisRoute.length) {
    await preloadImages(imagesForThisRoute)
    next()
  } else {
    next()
  }
})

export default router
