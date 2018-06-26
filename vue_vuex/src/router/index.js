import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/context/tictactoe/components/Game'
import TodoList from '@/context/todo/components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tictactoe',
      component: Game
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoList
    }
  ]
})
