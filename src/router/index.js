import { createRouter, createWebHistory } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
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
      redirect: '/index',
      component: () => import("@/views/LayoutPage.vue"),
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import("@/views/BookSaleInfo.vue")
        },
        {
          path: '/staff',
          name: 'staff',
          component: () => import("@/views/StaffManager.vue")
        },
        {
          path: '/vip',
          name: 'vip',
          component: () => import("@/views/VipUser.vue")
        },
        {
          path: '/manager',
          name: 'manager',
          component: () => import("@/views/AdminManager.vue")
        },
      ]
    },


  ]
})
router.beforeEach((to) => {
  const store = useCounterStore()
  if (to.path != '/' && store.token == '') {
    return '/'
  }
})
export default router
