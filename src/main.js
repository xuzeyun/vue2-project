import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// elementUI
Vue.use(ElementUI); // 已安装 babel-plugin-component 也可实现按需引入


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
