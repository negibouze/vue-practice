import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import App from '@/foundation/components/App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})
