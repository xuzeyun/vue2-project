// 帮助页面路由
export default [
  {
    path: '/help/demo',
    name: 'demo',
    component: () => import('../../views/help/demo')
  },
  {
    path: '/help/icons',
    name: 'icons',
    component: () => import('../../views/help/icons')
  },
  {
    path: '/help/chart',
    name: 'icons',
    component: () => import('../../views/help/chart')
  }
]