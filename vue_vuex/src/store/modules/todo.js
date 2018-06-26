import * as types from '../mutation-types'

const Todo = {
    namespaced: true,
    state: {
    },
    getters: {},
    mutations: {
        [types.ADD_TODO] (state, value) {
        },
        [types.DONE_TODO] (state, value) {
        }
    },
    actions: {
        addTodo({ commit }) {
            commit(types.ADD_TODO)
        },
        doneTodo({ commit }) {
            commit(types.DONE_TODO)
        }
    }
}

export default Todo
