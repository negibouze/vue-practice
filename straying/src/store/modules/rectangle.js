import api from '../../api'
import * as types from '../mutation-types'

const Rectangle = {
  namespaced: true,
  state: {
      projects: []
  },
  getters: {
  },
  mutations: {
      [types.BEGIN_RECTANGLE_SEARCH] (state) {
      },
      [types.EXECUTE_RECTANGLE_SEARCH] () {
      },
      [types.END_RECTANGLE_SEARCH] (state, { projects }) {
          state.projects = projects
      }
  },
  actions: {
      search({ commit }) {
          commit(types.BEGIN_RECTANGLE_SEARCH)
      },
      execSearch({ commit }, options) {
          commit(types.EXECUTE_RECTANGLE_SEARCH)
          // api.map.rectangle(options).then((projects) => {
          //     commit(types.END_RECTANGLE_SEARCH, {
          //         projects
          //     })
          // }).catch(() => {
          //     console.log('Error')
          // })
      }  
  }
}

export default Rectangle
