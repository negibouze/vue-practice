import * as types from '../mutation-types'

const Form = {
    namespaced: true,
    state: {
        dom: String
    },
    getters: {},
    mutations: {
        [types.RENDER_TEST] (state, value) {
            state.dom = value
        }
    },
    actions: {
      begin({ commit }, value) {
        commit(types.RENDER_TEST, value)
      }
    }
}

export default Form
