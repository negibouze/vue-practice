import * as types from '../mutation-types'

const Mordal = {
    namespaced: true,
    state: {
        isShow: false,
        type: null
    },
    getters: {},
    mutations: {
        [types.SHOW_MORDAL] (state, type) {
            state.isShow = true
            state.type = type
        },
        [types.HIDE_MORDAL] (state) {
            state.isShow = false
            state.type = null
        }
    },
    actions: {
        show({ commit }, type) {
            commit(types.SHOW_MORDAL, type)
        },
        hide({ commit }) {
            commit(types.HIDE_MORDAL)
        }
    }
}

export default Mordal
