// 帮助页面路由
export default [
  {
    path: '/help/demo',
    name: 'demo',
    component: () => import('../../views/help/demo')
  }
]