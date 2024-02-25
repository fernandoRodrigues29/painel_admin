import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

//importar estilo global
import  './assets/weel-looper.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
