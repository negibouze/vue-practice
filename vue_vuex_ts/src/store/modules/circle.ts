import * as types from '../mutation-types'

const Circle = {
    namespaced: true,
    state: {
        enable: false,
        radius: 0
    },
    getters: {},
    mutations: {
        [types.BEGIN_CIRCLE_SEARCH] (state, value) {
            state.enable = value
        },
        [types.UPDATE_RADIUS] (state, value) {
            state.radius = value
        }
    },
    actions: {
        begin({ commit }) {
            commit(types.BEGIN_CIRCLE_SEARCH, true)
        },
        end({ commit }) {
            commit(types.BEGIN_CIRCLE_SEARCH, false)
        },
        updateRadius({ commit }, value) {
            commit(types.UPDATE_RADIUS, value)
        }
    }
}

export default Circle
