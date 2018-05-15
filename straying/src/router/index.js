import Vue from 'vue'
import Router from 'vue-router'
import Home from '../foundation/components/Home'
import Canvas from '../foundation/components/Canvas'
import PDF from '../foundation/components/PDF'
import MapLoader from '../foundation/components/MapLoader'

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
      path: '/pdf',
      name: 'pdf',
      component: PDF
    },
    {
      path: '/map',
      name: 'map',
      component: MapLoader
    }
  ]
})
