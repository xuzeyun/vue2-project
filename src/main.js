import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import './styles/index.scss'

// elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Container from '@/components/container/index.vue'

// elementUI
Vue.use(ElementUI); // 已安装 babel-plugin-component 也可实现按需引入

// 全局组件注册
Vue.component('Container', Container);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
