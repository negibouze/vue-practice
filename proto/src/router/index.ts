import Vue from 'vue';
import Router from 'vue-router';
import TMap from '@/containers/map';
import Settings from '@/components/templates/settings';

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
