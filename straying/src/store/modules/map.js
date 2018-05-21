import api from '../../api'
import * as types from '../mutation-types'

const MapTest = {
    namespaced: true,
    state: {
        projects: []
    },
    getters: {
    },
    actions: {
        circleSearch({ commit }) {
            commit(types.BEGIN_CIRCLE_SEARCH)
        },
        rectangleSearch({ commit }) {
            commit(types.BEGIN_RECTANGLE_SEARCH)
        },
        execCircleSearch({ commit }, options) {
            commit(types.EXECUTE_CIRCLE_SEARCH)
            // api.map.circle(options).then((projects) => {
            //     commit(types.END_CIRCLE_SEARCH, {
            //         projects
            //     })
            // }).catch(() => {
            //     console.log('Error')
            // })
        },
        execRectangleSearch({ commit }, options) {
            commit(types.EXECUTE_RECTANGLE_SEARCH)
            // api.map.rectangle(options).then((projects) => {
            //     commit(types.END_RECTANGLE_SEARCH, {
            //         projects
            //     })
            // }).catch(() => {
            //     console.log('Error')
            // })
        },
        buttonAction({ commit, state, rootState })  {
            console.log("buttonAction")
        }  
    },
    mutations: {
        [types.BEGIN_CIRCLE_SEARCH] (state) {
        },
        [types.BEGIN_RECTANGLE_SEARCH] (state) {
        },
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
    }
}

export default MapTest
