import { Commit } from 'vuex';
import * as types from '../mutation-types';

export interface CircleState {
    active: boolean;
    mordal: boolean;
    center: number;
    radius: number;
}

const circle = {
    namespaced: true,
    state: {
        active: false,
        mordal: false,
        center: 0,
        radius: 0,
    } as CircleState,
    mutations: {
        [types.CIRCLE_SEARCH](state: CircleState, value: boolean): void {
            state.active = value;
        },
        [types.VISIBLE_MORDAL_CIRCLE_SEARCH](state: CircleState, value: boolean): void {
            state.mordal = value;
        },
        [types.UPDATE_RADIUS](state: CircleState, value: number): void {
            state.radius = value;
        },
        [types.SET_CENTER_COORDINATE](state: CircleState, value: number): void {
            state.center = value;
        },
    },
    actions: {
        begin({ commit }: { commit: Commit }): void {
            commit(types.CIRCLE_SEARCH, true);
        },
        end({ commit }: { commit: Commit }): void {
            commit(types.CIRCLE_SEARCH, false);
        },
        showMordal({ commit }: { commit: Commit }): void {
            commit(types.VISIBLE_MORDAL_CIRCLE_SEARCH, true);
        },
        hideMordal({ commit }: { commit: Commit }): void {
            commit(types.VISIBLE_MORDAL_CIRCLE_SEARCH, false);
        },
        updateRadius({ commit }: { commit: Commit }, value: number): void {
            commit(types.UPDATE_RADIUS, value);
        },
        setCenter({ commit }: { commit: Commit }, value: number): void {
            commit(types.SET_CENTER_COORDINATE, value);
        },
    },
};

export default circle;
