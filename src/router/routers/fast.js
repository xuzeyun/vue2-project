// 帮助页面路由
export default [
  {
    path: '/fast/tablecreate',
    name: 'demo',
    component: () => import('@/views/fast/tablecreate')
  },
  {
    path: '/fast/formcreate',
    name: 'form',
    component: () => import('@/views/fast/formcreate/Home.vue')
  },
]