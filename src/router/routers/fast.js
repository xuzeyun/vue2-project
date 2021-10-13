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
    component: () => import('@/views/fast/formcreate')
  },
  {
    path: '/parser',
    name: 'parser',
    component: () => import('@/components/form-create/parser/example/Index.vue')
  },
  {
    path: '/tinymce',
    name: 'tinymce',
    component: () => import('@/components/form-create/tinymce/example/Index.vue')
  }
]