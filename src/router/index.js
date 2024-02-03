import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/summary',
      name: 'summary',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/SummaryView.vue')
    },
    {
      path: '/add-task',
      name: 'addtask',
      component: () => import('../components/AddTaskView.vue')
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../views/ErrorNotFound.vue')
    }
  ]
})

export default router
