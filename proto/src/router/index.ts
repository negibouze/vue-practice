import Vue from 'vue';
import Router from 'vue-router';
import Settings from '@/components/templates/settings';
import TMap from '@/containers/map';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/map',
      name: 'map',
      component: TMap,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
  ],
});
