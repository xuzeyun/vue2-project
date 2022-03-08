// 项目开发菜单
export default [
  {
    name: '帮助',
    icon: 'book',
    menus: [
      { name: '示例页面', url: '/help/demo', icon: '', no: '1'},
      { name: '常用图标', url: '/help/icons', icon: '', no: '2'},
      // { name: '3D地球', url: '/help/chart', icon: '', no: '4'},
      { name: '战区地图', url: '/help/zqChart', icon: '', no: '4'},
      { name: 'el表单+', url: '/help/formplus', icon: '', no: '5'},
      { name: 'three.js 3d模型展示', url: '/help/three', icon: '', no: '6'},
      { name: '循环对象展示', url: '/help/objtree', icon: '', no: '6'},
    ]
  },
  {
    name: '快速构建',
    icon: 'bookmark',
    menus: [
      { name: '表格生成', url: '/fast/tablecreate', icon: '', no: '1'},
      { name: '表单生成', url: '/fast/formcreate', icon: '', no: '2'},
    ]
  }
]