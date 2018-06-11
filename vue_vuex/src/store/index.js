import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        history: [],
        board: Array(3).fill(Array(3).fill(null)),
        player: ''
    },
    getters: {
        nextPlayer: state => {
            return (state.player === '' || state.player === 'O') ? 'X' : 'O'
        }
    },
    mutations: {
        [types.CLICK_SQUARE] (state, { row, col, value }) {
            state.player = value
            state.board[row][col] = value
            state.history.push({ player: state.player, board: state.board })
        },
        [types.JUMP_TO] (state, index) {
            const c = state.history[index]
            state.player = c.player
            state.board = c.board
        }
    },
    actions: {
        click({ commit }, { row, col, value }) {
            console.log({ row, col })
            commit(types.CLICK_SQUARE, { row, col, value })
        },
        jumpTo({ commit }, index) {
            commit(types.JUMP_TO, index)
        }
    },
    modules,
    strict: debug
})
