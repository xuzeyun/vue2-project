import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hljs from 'highlight.js';
import 'normalize.css/normalize.css'
import './styles/index.scss'

// import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/styles/solarized-dark.css';
import 'material-design-icons/iconfont/material-icons.css';

// elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Container from '@/components/container/index.vue'

// elementUI
Vue.use(ElementUI); // 已安装 babel-plugin-component 也可实现按需引入
Vue.use(hljs.vuePlugin);

// 全局组件注册
Vue.component('Container', Container);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
