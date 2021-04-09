import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import router from './router'
import { store } from './store/index'
import moment from 'moment';
import './sass/main.scss'
moment.locale('es');
Vue.prototype.moment = moment
Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
