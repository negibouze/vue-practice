import api from '../../api'
import * as types from '../mutation-types'

const Circle = {
    namespaced: true,
    state: {
        radius: 0
    },
    getters: {},
    mutations: {
        [types.UPDATE_RADIUS] (state, value) {
            state.radius = value
        },
        [types.BEGIN_CIRCLE_SEARCH] (state) {
        },
        [types.EXECUTE_CIRCLE_SEARCH] () {
        },
        [types.END_CIRCLE_SEARCH] (state, { projects }) {
            state.projects = projects
        }
    },
    actions: {
        updateRadius({ commit }, value) {
            commit(types.UPDATE_RADIUS, value)
        },
        search({ commit }) {
            commit(types.BEGIN_CIRCLE_SEARCH)
        },
        execSearch({ commit }, options) {
            commit(types.EXECUTE_CIRCLE_SEARCH)
            // api.map.circle(options).then((projects) => {
            //     commit(types.END_CIRCLE_SEARCH, {
            //         projects
            //     })
            // }).catch(() => {
            //     console.log('Error')
            // })
        }
    }
}

export default Circle
