import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/foundation/components/Home'
import Canvas from '@/foundation/components/Canvas'
import Chart from '@/foundation/components/Chart'
import MapLoader from '@/foundation/components/MapLoader'
import Trial from '@/foundation/components/Trial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: Canvas
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    },
    {
      path: '/map',
      name: 'map',
      component: MapLoader
    },
    {
      path: '/trial',
      name: 'trial',
      component: Trial
    }
  ]
})
