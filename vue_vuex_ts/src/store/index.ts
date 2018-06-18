import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import * as types from './mutation-types'
import History from '@/vo/history'
import Tap from '@/vo/tap'
import Winner from '@/vo/winner'

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
            new History(
                0,
                Array(9).fill(null),
                new Tap(0, 0)
            )
        ],
        board: Array(9).fill(null),
        xIsNext: true,
        nextTurn: 1
    },
    getters: {
        nextPlayer: (state): string => {
            return state.xIsNext ? 'X' : 'O'
        },
        winner: (state): Winner | null => {
            const board = state.board
            for (const [a, b, c] of lines) {
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    return new Winner(board[a], [a, b, c])
                }
            }
            return null;
        }
    },
    mutations: {
        [types.CLICK_SQUARE] (state, { row, col, value }) {
            const turn = state.nextTurn
            const b = state.board.slice()
            b[(row * 3) + col] = value
            state.board = b
            state.xIsNext = !state.xIsNext
            state.history = state.history.slice(0, turn).concat({ turn, board: state.board, tap: { row: row + 1, col: col + 1 } })
            state.nextTurn += 1
        },
        [types.JUMP_TO] (state, index) {
            const c = state.history[index]
            state.nextTurn = index + 1
            state.board = c.board
            state.xIsNext = state.nextTurn % 2 === 1
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
