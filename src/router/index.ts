import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import MainPage from '../views/MainPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/gain'
      },
      {
        path: 'gain',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'loss',
        component: () => import('@/views/Tab2.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
