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
          path: '/StaffIncrease',
          name: 'StaffIncrease',
          component: () => import("@/views/StaffIncrease.vue")
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
        {
          path: '/admin',
          name: 'admin',
          component: () => import("@/views/AdminInfo.vue")
        },
        {
          path: '/orders',
          name: 'orders',
          component: () => import("@/views/Orders.vue")
        },
        {
          path: '/books',
          name: 'books',
          component: () => import("@/views/BooksInfo.vue")
        },
        {
          path: '/shelf',
          name: 'shelf',
          component: () => import("@/views/ShelfInfo.vue")
        },
        {
          path: '/AdminIncrease',
          name: 'AdminIncrease',
          component: () => import("@/views/AdminIncrease.vue")
        },
        {
          path: '/VipIncrease',
          name: 'VipIncrease',
          component: () => import("@/views/VipIncrease.vue")
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
