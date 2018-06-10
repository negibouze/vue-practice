import * as types from '../mutation-types'

const Square = {
    namespaced: true,
    state: {
        marked: false,
        position: null
    },
    getters: {},
    mutations: {
        [types.CLICK_SQUARE] (state, value) {
            state.marked = true
            stateposition = value
        }
    },
    actions: {
        click({ commit }, position) {
            commit(types.CLICK_SQUARE, position)
        }
    }
}

export default Square
