import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/reset.css'
import './assets/style/element.styl'
import './assets/font/iconfont.css'
Vue.config.productionTip = false



Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
