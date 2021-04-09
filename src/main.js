import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import router from './router'
import { store } from './store/index'
import moment from 'moment';
import './sass/main.scss'

Vue.config.productionTip = false
Vue.use({Vuex, moment})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
