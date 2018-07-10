import * as types from '../mutation-types'

const Rectangle = {
    namespaced: true,
    state: {
        enable: false,
        sw: 0,
        ne: 0
    },
    getters: {
    },
    mutations: {
        [types.BEGIN_RECTANGLE_SEARCH] (state, value: boolean) {
            state.enable = value
        },
        [types.UPDATE_BOUNDS] (state, { sw, ne }) {
            state.sw = sw
            state.ne = ne
        }
    },
    actions: {
        begin({ commit }) {
            commit(types.BEGIN_RECTANGLE_SEARCH, true)
        },
        end({ commit }) {
            commit(types.BEGIN_RECTANGLE_SEARCH, false)
        },
        updateBounds({ commit }, { sw, ne }) {
            commit(types.UPDATE_BOUNDS, { sw, ne })
        }
    }
}

export default Rectangle
