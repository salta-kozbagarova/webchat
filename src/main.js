import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import VueRouter from 'vue-router'
import mainRoutes from './router';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuetify, {
  iconfont: 'mdi'
})

new Vue({
  router: mainRoutes,
  render: h => h(App)
}).$mount('#app')
