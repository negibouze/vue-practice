import Vue from 'vue'
import App from './foundation/components/App/App.vue'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#root',
  store,
  render: h => h(App)
})
