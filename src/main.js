import Vue from 'vue'
import App from './App.vue'

import Vuelidate from 'vuelidate'

//plugins
Vue.use(Vuelidate)

import './assets/sass/main.sass'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
