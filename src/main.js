import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
