import { Commit } from 'vuex'
import * as types from '../mutation-types'
import Project from '@/entities/project'

export interface SearchState {
    circle: boolean,
    rectangle: boolean,
    projects: Project[]
}

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
        [types.EXECUTE_CIRCLE_SEARCH] (state: SearchState) {
            if (state.circle || state.rectangle) {
                return
            }
            state.circle = true
        },
        [types.EXECUTE_RECTANGLE_SEARCH] (state: SearchState) {
            if (state.circle || state.rectangle) {
                return
            }
            state.rectangle = true
        },
        [types.END_CIRCLE_SEARCH] (state: SearchState, { projects }: { projects: Project[] }) {
            state.projects = projects
            state.circle = false
        },
        [types.END_RECTANGLE_SEARCH] (state: SearchState, { projects }: { projects: Project[] }) {
            state.projects = projects
            state.rectangle = false
        }
    },
    actions: {
        circle({ commit }: { commit: Commit }) {
            commit(types.EXECUTE_CIRCLE_SEARCH)
        },
        rectangle({ commit }: { commit: Commit }) {
            commit(types.EXECUTE_RECTANGLE_SEARCH)
        },
        executeCircle({ commit }: { commit: Commit }, options: { [ key: string]: string | number }) {
            // api.map.circle(options).then((projects) => {
            //     commit(types.END_CIRCLE_SEARCH, {
            //         projects
            //     })
            // }).catch(() => {
            //     console.log('Error')
            // })
        },
        executeRectangle({ commit }: { commit: Commit }, options: { [ key: string]: string | number }) {
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
