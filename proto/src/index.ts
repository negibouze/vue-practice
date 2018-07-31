import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
// Element UI
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App),
});
