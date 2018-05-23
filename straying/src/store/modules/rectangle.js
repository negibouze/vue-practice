import * as types from '../mutation-types'

const Rectangle = {
    namespaced: true,
    state: {
        sw: 0,
        ne: 0
    },
    getters: {
    },
    mutations: {
        [types.UPDATE_BOUNDS] (state, { sw, ne }) {
            state.sw = sw
            state.ne = ne
        }
    },
    actions: {
        updateBounds({ commit }, { sw, ne }) {
            commit(types.UPDATE_BOUNDS, { sw, ne })
        }
    }
}

export default Rectangle
