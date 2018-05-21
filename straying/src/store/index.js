import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    count: 0
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    count() {
      return this.count
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    incrementBy(state, payload) {
      state.count += payload.amount
    },
    decrementBy(state, payload) {
      state.count -= payload.amount
    }    
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    incrementAsync({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    },
    incrementBy({ commit, state }, payload) {
      commit('incrementBy', payload)
    },
    decrement({ commit }) {
      commit('decrement')
    },
    decrementBy({ commit }, payload) {
      console.log('decrementBy in actions')
      commit('decrementBy', payload)
    }    
  },
  modules,
  strict: true
})
