import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import("@/views/AdminLogin.vue")
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import("@/views/LayoutPage.vue")
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import("@/views/demoPage.vue")
    },

  ]
})

export default router
