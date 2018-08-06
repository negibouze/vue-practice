import { Commit } from 'vuex';
import * as types from '../mutation-types';

export interface RectangleState {
    visibility: boolean;
    sw: number;
    ne: number;
}

export interface Coordinate {
    sw: number;
    ne: number;
}

const rectangle = {
    namespaced: true,
    state: {
        visibility: false,
        sw: 0,
        ne: 0,
    },
    mutations: {
        [types.VISIBLE_RECTANGLE_SEARCH](state: RectangleState, value: boolean) {
            state.visibility = value;
        },
        [types.UPDATE_BOUNDS](state: RectangleState, { sw, ne }: Coordinate) {
            state.sw = sw;
            state.ne = ne;
        },
    },
    actions: {
        visible({ commit }: { commit: Commit }) {
            commit(types.VISIBLE_RECTANGLE_SEARCH, true);
        },
        invisible({ commit }: { commit: Commit }) {
            commit(types.VISIBLE_RECTANGLE_SEARCH, false);
        },
        updateBounds({ commit }: { commit: Commit }, { sw, ne }: Coordinate) {
            commit(types.UPDATE_BOUNDS, { sw, ne });
        },
    },
};

export default rectangle;
