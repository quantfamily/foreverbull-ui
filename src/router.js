import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Backtests from './views/Backtests.vue'
import Workers from './views/Workers.vue'
import Services from './views/Services.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/backtests',
    name: 'Backtests',
    component: Backtests
  },
  {
    path: '/workers',
    name: 'Workers',
    component: Workers
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
