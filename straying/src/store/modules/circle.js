import * as types from '../mutation-types'

const Circle = {
    namespaced: true,
    state: {
        radius: 0
    },
    getters: {},
    mutations: {
        [types.UPDATE_RADIUS] (state, value) {
            state.radius = value
        }
    },
    actions: {
        updateRadius({ commit }, value) {
            commit(types.UPDATE_RADIUS, value)
        }
    }
}

export default Circle
