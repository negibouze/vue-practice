import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    actions: {
    },
    modules,
    strict: debug
})
