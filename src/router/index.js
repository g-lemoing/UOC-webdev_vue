import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FightView from '@/views/FightView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/fight',
      name: 'fight',
      component: FightView
    },
    {
      path: '/detail/:pokeId',
      name: 'detail',
      component: () => import('@/components/CardDetailView.vue')
    }
  ]
})

export default router
