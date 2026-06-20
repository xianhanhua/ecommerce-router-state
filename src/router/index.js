import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { public: true, title: '登录' }
  },
  {
    path: '/',
    component: () => import('@/layout/MainLayout.vue'),
    redirect: '/products',
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/ProductList.vue'),
        meta: { title: '商品管理' }
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('@/views/Cart.vue'),
        meta: { title: '购物车' }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/OrderList.vue'),
        meta: { title: '我的订单' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { public: true, title: '页面不存在' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const userStore = useUserStore()
  document.title = `${to.meta.title || '电商购物平台'} - 电商购物平台`

  if (!to.meta.public && !userStore.token) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }

  if (to.path === '/login' && userStore.token) {
    return '/products'
  }

  return true
})

export default router
