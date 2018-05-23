import api from '@/api'
import * as types from '../mutation-types'

const Search = {
    namespaced: true,
    state: {
        projects: []
    },
    getters: {
    },
    mutations: {
        [types.EXECUTE_CIRCLE_SEARCH] () {
        },
        [types.EXECUTE_RECTANGLE_SEARCH] () {
        },
        [types.END_CIRCLE_SEARCH] (state, { projects }) {
            state.projects = projects
        },
        [types.END_RECTANGLE_SEARCH] (state, { projects }) {
            state.projects = projects
        }
    },
    actions: {
        circle({ commit }, options) {
            commit(types.EXECUTE_CIRCLE_SEARCH)
            // api.map.circle(options).then((projects) => {
            //     commit(types.END_CIRCLE_SEARCH, {
            //         projects
            //     })
            // }).catch(() => {
            //     console.log('Error')
            // })
        },
        rectangle({ commit }, options) {
            commit(types.EXECUTE_RECTANGLE_SEARCH)
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
