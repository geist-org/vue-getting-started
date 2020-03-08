import Vue from 'vue'
import ZeitUI from '@zeit-ui/vue'
import App from './App.vue'
import '@zeit-ui/vue/dist/zeit-ui.css'

Vue.config.productionTip = false
Vue.use(ZeitUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
