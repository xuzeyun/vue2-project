// 项目开发菜单
export default [
  {
    name: '帮助',
    icon: 'book',
    menus: [
      { name: '示例页面', url: '/help/demo', icon: 'book', no: '1'},
      { name: '常用图标', url: '/help/icons', icon: 'book', no: '2'},
      // { name: '3D地球', url: '/help/chart', icon: 'book', no: '4'},
      { name: '战区地图', url: '/help/zqChart', icon: 'book', no: '4'},
      { name: 'el表单+', url: '/help/formplus', icon: 'book', no: '5'},
    ]
  },
  {
    name: '快速构建',
    icon: 'bookmark',
    menus: [
      { name: '表格生成', url: '/fast/tablecreate', icon: 'code', no: '1'},
      { name: '表单生成', url: '/fast/formcreate', icon: 'code', no: '2'},
    ]
  }
]