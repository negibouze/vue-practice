import { Commit } from 'vuex';
import * as types from '../mutation-types';

export interface CircleState {
    visibility: boolean;
    radius: number;
}

const circle = {
    namespaced: true,
    state: {
        visibility: false,
        radius: 0,
    } as CircleState,
    mutations: {
        [types.VISIBLE_CIRCLE_SEARCH](state: CircleState, value: boolean): void {
            state.visibility = value;
        },
        [types.UPDATE_RADIUS](state: CircleState, value: number): void {
            state.radius = value;
        },
    },
    actions: {
        visible({ commit }: { commit: Commit }): void {
            commit(types.VISIBLE_CIRCLE_SEARCH, true);
        },
        invisible({ commit }: { commit: Commit }): void {
            commit(types.VISIBLE_CIRCLE_SEARCH, false);
        },
        updateRadius({ commit }: { commit: Commit }, value: number): void {
            commit(types.UPDATE_RADIUS, value);
        },
    },
};

export default circle;
