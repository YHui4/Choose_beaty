import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/UserLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/user/Home.vue'),
        meta: { title: '首页' }
      },
      {
        path: 'contestants',
        name: 'ContestantList',
        component: () => import('@/views/user/ContestantList.vue'),
        meta: { title: '选手列表' }
      },
      {
        path: 'contestants/:id',
        name: 'ContestantDetail',
        component: () => import('@/views/user/ContestantDetail.vue'),
        meta: { title: '选手详情' }
      },
      {
        path: 'ranking',
        name: 'Ranking',
        component: () => import('@/views/user/Ranking.vue'),
        meta: { title: '排行榜' }
      },
      {
        path: 'rules',
        name: 'Rules',
        component: () => import('@/views/user/Rules.vue'),
        meta: { title: '活动规则' }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layout/AdminLayout.vue'),
    meta: { requiresAuth: true, role: 'admin' },
    children: [
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: () => import('@/views/admin/Dashboard.vue'),
        meta: { title: '后台首页' }
      },
      {
        path: 'contestants',
        name: 'ContestantManage',
        component: () => import('@/views/admin/ContestantManage.vue'),
        meta: { title: '选手管理' }
      },
      {
        path: 'users',
        name: 'UserManage',
        component: () => import('@/views/admin/UserManage.vue'),
        meta: { title: '用户管理' }
      },
      {
        path: 'votes',
        name: 'VoteRecord',
        component: () => import('@/views/admin/VoteRecord.vue'),
        meta: { title: '投票记录' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { title: '登录' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    next('/login')
    return
  }

  next()
})

export default router
