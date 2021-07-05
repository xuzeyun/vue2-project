import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../components/layout'
Vue.use(VueRouter)

// 导入子路由
import help from './routers/help'
const combine = [
  ...help
]

const routes = [
  {
    path: '/',
    name: 'layout',
    // component: () => import('../views/help/index.vue')
    component: layout,
    children: [...combine]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
