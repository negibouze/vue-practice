import { Commit } from 'vuex'
import * as types from '../mutation-types'

export interface RectangleState {
    enable: boolean;
    sw: number;
    ne: number;
}

export interface Coordinate {
    sw: number;
    ne: number
}

const Rectangle = {
    namespaced: true,
    state: {
        enable: false,
        sw: 0,
        ne: 0
    },
    getters: {
    },
    mutations: {
        [types.BEGIN_RECTANGLE_SEARCH] (state: RectangleState, value: boolean) {
            state.enable = value
        },
        [types.UPDATE_BOUNDS] (state: RectangleState, { sw, ne }: Coordinate) {
            state.sw = sw
            state.ne = ne
        }
    },
    actions: {
        begin({ commit }: { commit: Commit }) {
            commit(types.BEGIN_RECTANGLE_SEARCH, true)
        },
        end({ commit }: { commit: Commit }) {
            commit(types.BEGIN_RECTANGLE_SEARCH, false)
        },
        updateBounds({ commit }: { commit: Commit }, { sw, ne }: Coordinate) {
            commit(types.UPDATE_BOUNDS, { sw, ne })
        }
    }
}

export default Rectangle
