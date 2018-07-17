import Vue from 'vue'
import Router from 'vue-router'
import TMap from '@/components/templates/Map'
import Settings from '@/components/templates/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/map',
      name: 'map',
      component: TMap
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    }
  ]
})
