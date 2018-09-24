import Vue from 'vue'
import App from './App.vue'
import 'normalize.css'
import VueFire from 'vuefire'

Vue.config.productionTip = false
Vue.use(VueFire)

new Vue({
  render: h => h(App)
}).$mount('#app')
