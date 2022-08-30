import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Category from '@/views/Category.vue'
import Employees from '@/views/Employees.vue'
import Foods from '@/views/Foods.vue'
import Report from '@/views/Report.vue'
import _404 from '@/views/404.vue'

import Pages from '@/views/Pages/Pages.vue'
import Manages from '@/views/Pages/Manages.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/manages',
    component: Manages,
    children: [
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'category',
        name: 'Category',
        component: Category,
      },
      {
        path: 'employees',
        name: 'Employees',
        component: Employees,
      },
      {
        path: 'foods',
        name: 'Foods',
        component: Foods,
      },
      {
        path: 'report',
        name: 'Report',
        component: Report,
      },
    ],
  },

  {
    path: '/',
    component: Pages,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: '404',
        name: '404',
        component: _404,
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  //   linkExactActiveClass: 'text-yellow-300',
})

export default router
