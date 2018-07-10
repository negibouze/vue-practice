import * as types from '../mutation-types'

const Search = {
    namespaced: true,
    state: {
        circle: false,
        rectangle: false,
        projects: []
    },
    getters: {
    },
    mutations: {
        [types.EXECUTE_CIRCLE_SEARCH] (state) {
            if (state.circle || state.rectangle) {
                return
            }
            state.circle = true
        },
        [types.EXECUTE_RECTANGLE_SEARCH] (state) {
            if (state.circle || state.rectangle) {
                return
            }
            state.rectangle = true
        },
        [types.END_CIRCLE_SEARCH] (state, { projects }) {
            state.projects = projects
            state.circle = false
        },
        [types.END_RECTANGLE_SEARCH] (state, { projects }) {
            state.projects = projects
            state.rectangle = false
        }
    },
    actions: {
        circle({ commit }) {
            commit(types.EXECUTE_CIRCLE_SEARCH)
        },
        rectangle({ commit }) {
            commit(types.EXECUTE_RECTANGLE_SEARCH)
        },
        executeCircle({ commit }, options) {
            // api.map.circle(options).then((projects) => {
            //     commit(types.END_CIRCLE_SEARCH, {
            //         projects
            //     })
            // }).catch(() => {
            //     console.log('Error')
            // })
        },
        executeRectangle({ commit }, options) {
            // api.map.rectangle(options).then((projects) => {
            //     commit(types.END_RECTANGLE_SEARCH, {
            //         projects
            //     })
            // }).catch(() => {
            //     console.log('Error')
            // })
        }  
    }
}

export default Search
