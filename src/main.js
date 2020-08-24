import Vue from 'vue'
import GeistUI from '@geist-ui/vue'
import App from './App.vue'
import '@geist-ui/vue/dist/geist-ui.css'

Vue.config.productionTip = false
Vue.use(GeistUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
