import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
  
export default new Vuex.Store({
    state: {
        history: [
            {
                turn: 0,
                board: Array(9).fill(null),
                tap: { row: 0, col: 0 }
            }
        ],
        board: Array(9).fill(null),
        xIsNext: true,
        turn: 0
    },
    getters: {
        nextPlayer: state => {
            return state.xIsNext ? 'X' : 'O'
        },
        winner: state => {
            const board = state.board
            for (const [a, b, c] in lines) {
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    return board[a];
                }
            }
            return null;
        }
    },
    mutations: {
        [types.CLICK_SQUARE] (state, { row, col, value }) {
            const b = state.board.slice()
            b[0] = value
            state.board = b
            state.xIsNext = !state.xIsNext
            state.history = state.history.slice(0, state.turn).concat({ turn: state.turn, board: state.board, tap: { row: row + 1, col: col + 1 } })
            state.turn += 1
        },
        [types.JUMP_TO] (state, index) {
            const c = state.history[index]
            state.turn = index + 1
            state.board = c.board
            state.xIsNext = index % 2 === 1
        }
    },
    actions: {
        click({ commit }, { row, col, value }) {
            commit(types.CLICK_SQUARE, { row, col, value })
        },
        jumpTo({ commit }, index) {
            commit(types.JUMP_TO, index)
        }
    },
    modules,
    strict: debug
})
