import api from '@/api'
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
            setTimeout(() => {
                commit(types.END_CIRCLE_SEARCH, {
                    projects: [
                        { lat: 35.70291655063803, lng: 139.69022108305057, name: 'Dummy Project 1' },
                        { lat: 35.69183361741748, lng: 139.69404054868778, name: 'Dummy Project 2' },
                        { lat: 35.693367196850915, lng: 139.70429731596073, name: 'Dummy Project 3' }
                    ]
                })
            }, 3000)
            // api.map.circle(options).then((projects) => {
            //     commit(types.END_CIRCLE_SEARCH, {
            //         projects
            //     })
            // }).catch(() => {
            //     console.log('Error')
            // })
        },
        executeRectangle({ commit }, options) {
            commit(types.END_RECTANGLE_SEARCH, {
                projects: []
            })
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
